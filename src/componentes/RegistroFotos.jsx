// Crie este arquivo em: src/componentes/RegistroFotos.jsx

import React, { useState, useEffect } from 'react';
import '../estilos/FotosStyle.css';

const RegistroFotos = () => {
  const [fotos, setFotos] = useState({
    inicio: {
      frontalNormal: null,
      frontalContraido: null,
      lateral: null,
      costasNormal: null,
      costasContraido: null
    },
    meio: {
      frontalNormal: null,
      frontalContraido: null,
      lateral: null,
      costasNormal: null,
      costasContraido: null
    },
    final: {
      frontalNormal: null,
      frontalContraido: null,
      lateral: null,
      costasNormal: null,
      costasContraido: null
    }
  });

  const [etapaAtiva, setEtapaAtiva] = useState('inicio');
  const [visualizacao, setVisualizacao] = useState('upload');
  const [comparacao, setComparacao] = useState(['inicio', 'final']);

  // Carregar fotos do localStorage ao iniciar
  useEffect(() => {
    const fotosSalvas = localStorage.getItem('progress_photos');
    if (fotosSalvas) {
      setFotos(JSON.parse(fotosSalvas));
    }
  }, []);

  // Lógica para upload de imagens
  const handleImageUpload = (etapa, tipo, e) => {
    const file = e.target.files[0];
    if (file) {
      // Redimensionar imagem para evitar problemas de armazenamento
      const reader = new FileReader();
      reader.onloadend = () => {
        // Criar imagem temporária para redimensionar
        const img = new Image();
        img.onload = () => {
          // Criar canvas para redimensionar a imagem
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;

          // Redimensionar para largura máxima de 500px
          if (width > 500) {
            height = Math.floor(height * (500 / width));
            width = 500;
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          // Obter imagem redimensionada como base64
          const resizedImage = canvas.toDataURL('image/jpeg', 0.7);

          // Salvar no state e localStorage
          const novasFotos = { ...fotos };
          novasFotos[etapa][tipo] = resizedImage;
          setFotos(novasFotos);
          localStorage.setItem('progress_photos', JSON.stringify(novasFotos));
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };

  // Lógica para remover uma foto
  const removerFoto = (etapa, tipo) => {
    const novasFotos = { ...fotos };
    novasFotos[etapa][tipo] = null;
    setFotos(novasFotos);
    localStorage.setItem('progress_photos', JSON.stringify(novasFotos));
  };

  // Componente interno para card de upload
  const FotoUploadCard = ({ titulo, desc, foto, onUpload, onRemove }) => {
    return (
      <div className="foto-upload-card">
        <h4>{titulo}</h4>
        <p className="foto-desc">{desc}</p>

        <div className="foto-container">
          {foto ? (
            <>
              <img src={foto} alt={titulo} className="preview-foto" />
              <button className="remove-btn" onClick={onRemove}>
                <span>🗑️</span> Remover
              </button>
            </>
          ) : (
            <div className="upload-placeholder">
              <input
                type="file"
                accept="image/*"
                id={`foto-${titulo}-${etapaAtiva}`}
                onChange={onUpload}
                hidden
              />
              <label htmlFor={`foto-${titulo}-${etapaAtiva}`} className="upload-btn">
                <span>📷</span> Selecionar foto
              </label>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="section">
      <h2>Registro Fotográfico</h2>

      <div className="tab-selector">
        <button
          className={visualizacao === 'upload' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setVisualizacao('upload')}
        >
          <span className="tab-icon">📷</span>
          <span>Upload</span>
        </button>
        <button
          className={visualizacao === 'compare' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setVisualizacao('compare')}
        >
          <span className="tab-icon">👁️</span>
          <span>Comparar</span>
        </button>
      </div>

      {visualizacao === 'upload' ? (
        <div className="fotos-upload">
          <div className="exercise intro-card">
            <div className="exercise-name">Como tirar suas fotos</div>
            <div className="details">
              <p>• Use sempre o mesmo fundo neutro e iluminação consistente</p>
              <p>• Vista as mesmas roupas ou similares (shorts/maiô esportivo)</p>
              <p>• Mantenha a mesma distância e ângulo da câmera</p>
              <p>• Tire as fotos no mesmo período do dia (idealmente pela manhã em jejum)</p>
              <p>• Posicione o corpo inteiro no enquadramento</p>
            </div>
          </div>

          {/* Tabs para as diferentes etapas */}
          <div className="etapas-tabs">
            <button
              className={etapaAtiva === 'inicio' ? 'etapa-btn active' : 'etapa-btn'}
              onClick={() => setEtapaAtiva('inicio')}
            >
              Início
            </button>
            <button
              className={etapaAtiva === 'meio' ? 'etapa-btn active' : 'etapa-btn'}
              onClick={() => setEtapaAtiva('meio')}
            >
              Meio (2 semanas)
            </button>
            <button
              className={etapaAtiva === 'final' ? 'etapa-btn active' : 'etapa-btn'}
              onClick={() => setEtapaAtiva('final')}
            >
              Final
            </button>
          </div>

          <div className="foto-grid">
            <FotoUploadCard
              titulo="Frontal Normal"
              desc="Braços relaxados ao lado do corpo, pés afastados na largura dos ombros"
              foto={fotos[etapaAtiva].frontalNormal}
              onUpload={(e) => handleImageUpload(etapaAtiva, 'frontalNormal', e)}
              onRemove={() => removerFoto(etapaAtiva, 'frontalNormal')}
            />

            <FotoUploadCard
              titulo="Frontal Contraído"
              desc="Abdômen contraído, braços flexionados ou em dupla bíceps"
              foto={fotos[etapaAtiva].frontalContraido}
              onUpload={(e) => handleImageUpload(etapaAtiva, 'frontalContraido', e)}
              onRemove={() => removerFoto(etapaAtiva, 'frontalContraido')}
            />

            <FotoUploadCard
              titulo="Lateral"
              desc="Perfil lateral, postura natural"
              foto={fotos[etapaAtiva].lateral}
              onUpload={(e) => handleImageUpload(etapaAtiva, 'lateral', e)}
              onRemove={() => removerFoto(etapaAtiva, 'lateral')}
            />

            <FotoUploadCard
              titulo="Costas Normal"
              desc="De costas, braços relaxados"
              foto={fotos[etapaAtiva].costasNormal}
              onUpload={(e) => handleImageUpload(etapaAtiva, 'costasNormal', e)}
              onRemove={() => removerFoto(etapaAtiva, 'costasNormal')}
            />

            <FotoUploadCard
              titulo="Costas Contraído"
              desc="Costas com abertura em V, músculos contraídos"
              foto={fotos[etapaAtiva].costasContraido}
              onUpload={(e) => handleImageUpload(etapaAtiva, 'costasContraido', e)}
              onRemove={() => removerFoto(etapaAtiva, 'costasContraido')}
            />
          </div>
        </div>
      ) : (
        <div className="fotos-comparacao">
          {/* Interface de comparação */}
          <div className="comparacao-controles">
            <select
              value={comparacao[0]}
              onChange={(e) => setComparacao([e.target.value, comparacao[1]])}
            >
              <option value="inicio">Início</option>
              <option value="meio">Meio</option>
              <option value="final">Final</option>
            </select>
            <span>vs</span>
            <select
              value={comparacao[1]}
              onChange={(e) => setComparacao([comparacao[0], e.target.value])}
            >
              <option value="inicio">Início</option>
              <option value="meio">Meio</option>
              <option value="final">Final</option>
            </select>
          </div>

          {/* Grade de comparação */}
          <div className="comparacao-grid">
            {['frontalNormal', 'frontalContraido', 'lateral', 'costasNormal', 'costasContraido'].map((tipo) => {
              const titulos = {
                frontalNormal: 'Frontal Normal',
                frontalContraido: 'Frontal Contraído',
                lateral: 'Lateral',
                costasNormal: 'Costas Normal',
                costasContraido: 'Costas Contraído'
              };

              return (
                <div className="comparacao-item" key={tipo}>
                  <h4>{titulos[tipo]}</h4>
                  <div className="foto-comparacao-container">
                    <div className="foto-comparacao">
                      {fotos[comparacao[0]][tipo] ? (
                        <img src={fotos[comparacao[0]][tipo]} alt="Antes" />
                      ) : (
                        <div className="no-photo">Sem foto</div>
                      )}
                      <div className="etapa-label">{comparacao[0]}</div>
                    </div>

                    <div className="foto-comparacao">
                      {fotos[comparacao[1]][tipo] ? (
                        <img src={fotos[comparacao[1]][tipo]} alt="Depois" />
                      ) : (
                        <div className="no-photo">Sem foto</div>
                      )}
                      <div className="etapa-label">{comparacao[1]}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistroFotos;