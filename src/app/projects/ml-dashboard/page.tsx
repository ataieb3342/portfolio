// app/projects/ml-dashboard/page.tsx
'use client';

import { useState, useEffect } from 'react';

const API_URL = "https://ataieb-immobilier-api.hf.space/predict"; 

export default function MLDashboard() {
  const [surface, setSurface] = useState(100);
  const [pieces, setPieces] = useState(3);
  const [prediction, setPrediction] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // SUPPRIME tout le code TensorFlow.js, on utilise l'API maintenant
  const predictWithAPI = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          surface: surface,
          pieces: pieces
        })
      });
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.prix_predicted) {
        setPrediction(data.prix_predicted);
      } else {
        throw new Error(data.error || "Erreur inconnue de l'API");
      }
    } catch (error) {
      console.error('❌ Erreur API:', error);
      setError(error instanceof Error ? error.message : "Erreur de connexion à l'API");
    } finally {
      setLoading(false);
    }
  };

  // Appel automatique quand les paramètres changent
  useEffect(() => {
    predictWithAPI();
  }, [surface, pieces]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">🏠 Dashboard Immobilier IA</h1>
        <p className="text-gray-400 mb-8">
          Modèle de machine learning entraîné sur 305,706 transactions réelles
        </p>
        
        {error && (
          <div className="mb-6 p-4 bg-red-900/20 border border-red-500 rounded-lg">
            <p className="text-red-400">⚠️ {error}</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contrôles de prédiction */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-bold mb-6">🎯 Estimateur de Prix</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Surface du terrain : <span className="text-blue-400">{surface} m²</span>
                </label>
                <input 
                  type="range" 
                  min="20" 
                  max="1000" 
                  value={surface}
                  onChange={(e) => setSurface(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>20m²</span>
                  <span>500m²</span>
                  <span>1000m²</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Nombre de pièces : <span className="text-blue-400">{pieces}</span>
                </label>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={pieces}
                  onChange={(e) => setPieces(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>1</span>
                  <span>10</span>
                </div>
              </div>
            </div>

            {loading && (
              <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500 rounded-lg">
                <p className="text-blue-400">🔄 Calcul en cours...</p>
              </div>
            )}

            {prediction && !loading && (
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg border border-blue-500">
                <h3 className="font-bold text-lg mb-2">💰 Prix estimé :</h3>
                <p className="text-3xl font-bold">{Math.round(prediction).toLocaleString('fr-FR')} €</p>
                <p className="text-blue-200 text-sm mt-2">
                  Basé sur l&apos;analyse de 305,706 transactions immobilières
                </p>
              </div>
            )}
          </div>

          {/* Section technique - MODIFIÉE */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-bold mb-6">⚙️ Détails Techniques</h2>
            
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <span className="text-blue-400">🤖</span>
                </div>
                <div>
                  <h4 className="font-semibold">API FastAPI + TensorFlow</h4>
                  <p className="text-sm text-gray-400">Modèle déployé sur Hugging Face</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-500/20 p-2 rounded-lg">
                  <span className="text-green-400">📊</span>
                </div>
                <div>
                  <h4 className="font-semibold">Données Réelles</h4>
                  <p className="text-sm text-gray-400">Source: data.gouv.fr - Demandes de valeurs foncières</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <span className="text-purple-400">🚀</span>
                </div>
                <div>
                  <h4 className="font-semibold">Architecture Moderne</h4>
                  <p className="text-sm text-gray-400">Next.js + FastAPI + TensorFlow</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-700/50 rounded-lg border border-gray-600">
              <h3 className="font-bold mb-3 text-lg">🏗️ Stack Technique</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">Frontend:</p>
                  <p className="font-semibold">Next.js + React</p>
                </div>
                <div>
                  <p className="text-gray-400">Backend:</p>
                  <p className="font-semibold">FastAPI</p>
                </div>
                <div>
                  <p className="text-gray-400">ML:</p>
                  <p className="font-semibold">TensorFlow</p>
                </div>
                <div>
                  <p className="text-gray-400">Hosting:</p>
                  <p className="font-semibold">Hugging Face</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}