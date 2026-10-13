'use client';

import { Image_fields } from "@/lib/typings";
import Image from "next/image";
import { useState } from "react";

interface CargaLocal {
    valorQ: number;
}

interface DistanciasMap {
    [key: string]: number;
}
interface ResultadoLocal {
    i: number;
    j: number;
    qi: number;
    qj: number;
    distancia: number;
    energiaPar: number;
    formulaTexto: string;
}

const formatoCien = (numero: number, decimales: number = 4) => {
    if (numero === 0) return "0";
    const expStr = numero.toExponential(decimales);
    const [coeficiente, exponente] = expStr.split("e");
    const expLimpio = exponente.replace("+", "");
    return (
        <span>
            {coeficiente} &times; 10<sup>{expLimpio}</sup>
        </span>
    );
};

export default function CalculadoraFisica({ city }: { city: Image_fields }) {
    const [numCargas, setNumCargas] = useState<number>(0);
    const [cargas, setCargas] = useState<CargaLocal[]>([]);
    const [distancias, setDistancias] = useState<DistanciasMap>({});
    const [resultados, setResultados] = useState<ResultadoLocal[]>([]);
    const [energiaTotal, setEnergiaTotal] = useState<number>(0);

    const K = 9e9;

    const nuevaNumCargas = (n: number) => {
        setNumCargas(n);
        const nuevasCargas: CargaLocal[] = Array.from({ length: n }, () => ({
            valorQ: 0,
        }));
        setCargas(nuevasCargas);
        setDistancias({});
        setResultados([]);
        setEnergiaTotal(0);
    };

    const actualizarCarga = (index: number, valor: number) => {
        setCargas((cargasPrevias) =>
            cargasPrevias.map((carga, i) =>
                i === index ? { ...carga, valorQ: valor } : carga
            )
        );
    };

    const actualizarDistancia = (i: number, j: number, valor: number) => {
        const clave = i < j ? `${i}-${j}` : `${j}-${i}`;
        setDistancias((prev) => ({
            ...prev,
            [clave]: valor,
        }));
    };

    const simulacionNcargas = (e?: React.FormEvent | React.MouseEvent) => {
        if (e) e.preventDefault();
        const listaInteracciones: ResultadoLocal[] = [];
        let sumaEnergias = 0;

        for (let i = 0; i < cargas.length; i++) {
            for (let j = 0; j < cargas.length; j++) {
                if (i !== j) {
                    const cargaI = cargas[i];
                    const cargaJ = cargas[j];

                    const clave = i < j ? `${i}-${j}` : `${j}-${i}`;
                    const r_ij = distancias[clave] || 0;

                    if (r_ij <= 0) continue;

                    const u_par = (K * cargaI.valorQ * cargaJ.valorQ) / r_ij;
                    sumaEnergias += u_par;

                    const formulaTexto = `U = (9 × 10⁹ · [${cargaI.valorQ} C] · [${cargaJ.valorQ} C]) / ${r_ij.toFixed(2)} m`;

                    listaInteracciones.push({
                        i: i + 1,
                        j: j + 1,
                        qi: cargaI.valorQ,
                        qj: cargaJ.valorQ,
                        distancia: r_ij,
                        energiaPar: u_par,
                        formulaTexto: formulaTexto
                    });
                }
            }
        }

        setResultados(listaInteracciones);
        setEnergiaTotal(0.5 * sumaEnergias);
    };

    const paresUnicos: [number, number][] = [];
    for (let i = 0; i < numCargas; i++) {
        for (let j = i + 1; j < numCargas; j++) {
            paresUnicos.push([i, j]);
        }
    }

    return (
        <div className="max-w-3xl w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative">
            <Image src={`https:${city.fields.file.url}`} alt=" "
                width={city.fields.file.details.image.width}
                height={city.fields.file.details.image.height}
                className="absolute bottom-[40%] z-[-1] right-0 elemento-animado" />
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
                Calculadora del Sistema de Energía Potencial
            </h1>
            <p className="text-gray-600 text-sm text-center mb-6">
                Resolución completa de dobles sumatorias usando distancias fijas ingresadas por el usuario.
            </p>

            <div className="mb-6 max-w-md mx-auto">
                <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
                    1. Cantidad de cargas en el sistema (n):
                </label>
                <input
                    type="number"
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 font-medium"
                    placeholder="Introduce n (ej. 3)"
                    onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                    onChange={(e) => nuevaNumCargas(Math.max(0, Number(e.target.value)))}
                />
            </div>

            {numCargas > 0 && (
                <div className="mb-6 bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <h2 className="text-xs font-bold text-gray-500 uppercase mb-3">
                        2. Asignar Valores de Carga (Coulombios):
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-48 overflow-y-auto pr-1 mb-6">
                        {cargas.map((carga, index) => (
                            <div key={index} className="flex gap-2 bg-white p-3 rounded-lg border border-gray-200 items-center justify-between">
                                <span className="text-sm font-bold text-blue-600">
                                    Carga q<sub>{index + 1}</sub>:
                                </span>
                                <input
                                    type="number"
                                    placeholder="Valor (C)"
                                    className="w-36 px-2 py-1 text-xs border rounded text-gray-900"
                                    onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                                    onChange={(e) => actualizarCarga(index, Number(e.target.value))}
                                />
                            </div>
                        ))}
                    </div>

                    {paresUnicos.length > 0 && (
                        <>
                            <h2 className="text-xs font-bold text-gray-500 uppercase mb-3">
                                3. Ingresar Distancia Fija entre Cargas (r<sub>ij</sub>):
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-48 overflow-y-auto pr-1">
                                {paresUnicos.map(([i, j]) => {
                                    const clave = `${i}-${j}`;
                                    return (
                                        <div key={clave} className="flex gap-2 bg-white p-3 rounded-lg border border-gray-200 items-center justify-between">
                                            <span className="text-sm font-bold text-amber-600">
                                                Distancia r<sub>{i + 1}{j + 1}</sub>:
                                            </span>
                                            <input
                                                type="number"
                                                min="0.001"
                                                step="any"
                                                placeholder="Distancia (m)"
                                                className="w-36 px-2 py-1 text-xs border rounded text-gray-900"
                                                onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                                                onChange={(e) => actualizarDistancia(i, j, Number(e.target.value))}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    )}

                    <button
                        type="button"
                        onClick={simulacionNcargas}
                        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition-colors text-sm shadow-md"
                    >
                        Calcular Energía Potencial Total
                    </button>
                </div>
            )}

            {resultados.length > 0 && (
                <div className="space-y-6 mt-6">
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs text-gray-700">
                        <span className="block text-xs font-bold text-gray-500 uppercase mb-2 font-sans">
                            Desglose Algebraico del Sistema:
                        </span>
                        <div className="p-2 bg-white rounded border border-gray-100 shadow-sm overflow-x-auto break-words leading-relaxed text-blue-800 font-bold">
                            U<sub>T</sub> = 0.5 &times; ( {resultados.map(res => `U${res.i}${res.j}`).join(" + ")} )
                        </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs text-gray-700">
                        <span className="block text-xs font-bold text-gray-500 uppercase mb-2 font-sans">
                            Reemplazo Numérico Total:
                        </span>
                        <div className="p-2 bg-white rounded border border-gray-100 shadow-sm overflow-x-auto break-words leading-relaxed text-gray-800">
                            U<sub>T</sub> = 0.5 &times; ( {
                                resultados.map((res, idx) => (
                                    <span key={idx}>
                                        {idx > 0 && " + "}
                                        [{formatoCien(res.energiaPar, 3)}]
                                    </span>
                                ))
                            } )
                        </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 text-center">
                        <span className="block text-xs font-bold text-blue-600 uppercase mb-1">
                            Resultado Final de Energía Total (U_T):
                        </span>
                        <span className="text-3xl font-mono font-bold text-blue-900">
                            {formatoCien(energiaTotal, 4)} Julios
                        </span>
                    </div>

                    <div>
                        <p className="text-sm font-bold text-gray-700 mb-2">
                            Desglose Matemático de Reemplazo ({resultados.length} pares):
                        </p>
                        <div className="space-y-2 max-h-60 overflow-y-auto border border-gray-200 rounded-lg p-3 bg-gray-50 font-mono text-xs text-gray-700">
                            {resultados.map((res, index) => (
                                <div key={index} className="p-2 bg-white rounded border border-gray-100 shadow-sm">
                                    <div className="flex justify-between text-blue-700 font-bold mb-1">
                                        <span>Interacción Par (i: {res.i}, j: {res.j})</span>
                                        <span>r<sub>{res.i}{res.j}</sub> = {res.distancia.toFixed(2)} m</span>
                                    </div>
                                    <div className="text-gray-600 break-all bg-gray-50 p-1.5 rounded border border-gray-200 mb-1">
                                        {res.formulaTexto}
                                    </div>
                                    <div className="text-right text-gray-500 font-sans text-xs">
                                        U<sub>{res.i}{res.j}</sub> = <span className="font-mono text-gray-800 font-bold">{formatoCien(res.energiaPar, 3)} Julios</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <p className="text-[14px] font-bold mb-2">
                Codigo fuente C++
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-xs text-gray-800 font-mono border border-gray-200">
                <code>{`
#include <iostream>
#include <vector>
#include <string>
#include <map>
using namespace std;

struct DatosCarga {
    double valorQ;
};

struct CalculoNCargas {
    int i;
    int j;
    double distancia;
    double energiaPar;
};

char digitoComun(int d) {
    return '0' + (d % 10);
}

string formatoCien(double num, int decimales) {
    string resultado = "";
    if (num < 0) {
        resultado += "-";
        num = -num;
    }
    
    int parteEntera = num;
    
    string parte2 = "";
    if (parteEntera == 0) {
        parte2 = "0";
    } else {
        int temp = parteEntera;
        while (temp > 0) {
            parte2 = digitoComun(temp % 10) + parte2;
            temp /= 10;
        }
    }
    resultado += parte2 + ".";
    
    double residuo = num - parteEntera;

    for (int i = 0; i < decimales; i++) {
        residuo *= 10;
        int digitoEntero = residuo; 
        resultado += digitoComun(digitoEntero);
        residuo -= digitoEntero; 
    }

    return resultado;
}

string formatoC2(double n, int decimales) {
    string signo = "";
    if (n < 0) {
        signo = "-";
        n = -n;
    }
    
    double coeficiente = n / 1e9;
    
    return signo + formatoCien(coeficiente, decimales) + " x 10^9";
}

int main() {
    cout << endl;
    cout << "Calculadora de N Cargas (Distancias Fijas)" << endl;
    cout << endl;
    int numCargas;

    cout << "Cantidad de cargas en el sistema (n): ";
    if (!(cin >> numCargas) || numCargas <= 0) {
        cout << "Cantidad invalida." << endl;
        return 1;
    }

    vector<DatosCarga> cargas(numCargas);
    cout << endl;
    cout << "Valores de Carga C (Coulombios):" << endl;
    
    for (int i = 0; i < numCargas; i++) {
        cout << "Carga q" << (i + 1) << " Valor (C): "; 
        cin >> cargas[i].valorQ;
    }

    map<string, double> distancias;
    cout << endl;
    cout << "Ingrese las distancias fijas (m) entre los pares:" << endl;

    for (int i = 0; i < numCargas; i++) {
        for (int j = i + 1; j < numCargas; j++) {
            double dist;
            cout << "Distancia r" << (i + 1) << (j + 1) << " (m): ";
            cin >> dist;
            
            string clave = to_string(i) + "-" + to_string(j);
            distancias[clave] = dist;
        }
    }

    const double K = 9e9;
    vector<CalculoNCargas> resultados;
    double sumaEnergias = 0.0;

    for (int i = 0; i < numCargas; i++) {
        for (int j = 0; j < numCargas; j++) {
            if (i != j) {
                int minIdx = (i < j) ? i : j;
                int maxIdx = (i < j) ? j : i;
                string clave = to_string(minIdx) + "-" + to_string(maxIdx);
                
                double r_ij = distancias[clave];

                if (r_ij <= 0) continue; 

                double u_par = (K * cargas[i].valorQ * cargas[j].valorQ) / r_ij;
                sumaEnergias += u_par;

                resultados.push_back({i + 1, j + 1, r_ij, u_par});
            }
        }
    }
    double energiaTotal = 0.5 * sumaEnergias;

    if (!resultados.empty()) {
        cout << endl;
        cout << " Resultados : " << endl;
        cout << endl;
        cout << "Desglose matematico : " << endl;
        cout << "U_T = 0.5 x ( ";
        for (size_t k = 0; k < resultados.size(); k++) {
            cout << "U" << resultados[k].i << resultados[k].j;
            if (k < resultados.size() - 1) cout << " + ";
        }
        cout << " )" << endl;
        cout << endl;

        cout << "Remplazo : " << endl;
        cout << "U_T = 0.5 x ( ";
        for (size_t k = 0; k < resultados.size(); k++) {
            cout << "[" << formatoC2(resultados[k].energiaPar, 3) << " J]";
            if (k < resultados.size() - 1) cout << " + ";
        }
        cout << " )" << endl;
        cout << endl;

        cout << "Energia Total (U_T):" << endl;
        cout << formatoC2(energiaTotal, 4) << " Julios" << endl;
        cout << endl;
        cout << "Desglose Matematico de Reemplazo (" << resultados.size() << " pares):" << endl;
        for (size_t k = 0; k < resultados.size(); k++) {
        
            cout << "Pare (i: " << resultados[k].i << ", j: " << resultados[k].j << ") " << endl;
            cout << "r_" << resultados[k].i << resultados[k].j << " = ";
            cout << formatoCien(resultados[k].distancia, 2) << " m" << endl;
            
            cout << "U = (9 x 10^9 * [" << cargas[resultados[k].i - 1].valorQ << " C] * [" << cargas[resultados[k].j - 1].valorQ << " C]) / ";
            cout << formatoCien(resultados[k].distancia, 2) << " m" << endl;
            
            cout << "U_" << resultados[k].i << resultados[k].j << " = ";
            cout << formatoC2(resultados[k].energiaPar, 3) << " Julios" << endl;
            cout << endl;
        }
    }

    return 0;
}`
                }
                </code>
            </pre>
        </div>
    )
}
