import { frontendDb } from '@infrastructure/db/configuracion';
import React ,{useState, useEffect} from 'react';


interface TerminalDespachoMSP {
  id?: number;
  impresionAutomatica: boolean;
  tamanioPapel: string;
  anchoPapelPersonalizado: number;
}

export function ConfiguracionImpresoraForm() {
  const [config, setConfig] = useState<TerminalDespachoMSP>({
    impresionAutomatica: false,
    tamanioPapel: 'A4',
    anchoPapelPersonalizado:80
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log('configuracion',config)

    // Guarda la configuración en IndexedDB
    await frontendDb.confImprimir.put({ ...config }, 1);
  };

  useEffect(() => {
    // Recupera la configuración de IndexedDB al cargar la página
    const getStoredConfig = async () => {
      const configData = await frontendDb.confImprimir.get(1);
      if (configData) {
        setConfig(configData);
      }
    };
    getStoredConfig();
  }, []);

  const handleTamanioPapelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setConfig({
      ...config,
      tamanioPapel: value,
      anchoPapelPersonalizado: value === 'Personalizado' ? 80 : config.anchoPapelPersonalizado,
    });
  };

  return (
    <div className="p-4 w-1/4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="impresionAutomatica" className="block text-sm font-medium text-gray-700">
            Impresión Automática:
          </label>
          <input
            type="checkbox"
            id="impresionAutomatica"
            className="mt-1"
            checked={config.impresionAutomatica}
            onChange={(e) => setConfig({ ...config, impresionAutomatica: e.target.checked })}
          />
        </div>

        <div>
          <label htmlFor="tamanioPapel" className="block text-sm font-medium text-gray-700">
            Tamaño de Papel:
          </label>
          <select
            id="tamanioPapel"
            className="mt-1 p-2 w-full border rounded-md"
            value={config.tamanioPapel}
            onChange={handleTamanioPapelChange}
          >
            <option value="A4">A4</option>
            <option value="Personalizado">Personalizado</option>
          </select>
        </div>

        {config.tamanioPapel === 'Personalizado' && (
          <div>
            <label htmlFor="anchoPapelPersonalizado" className="block text-sm font-medium text-gray-700">
              Ancho de Papel Personalizado (mm):
            </label>
            <input
              type="number"
              id="anchoPapelPersonalizado"
              className="mt-1 p-2 w-full border rounded-md"
              value={config.anchoPapelPersonalizado || ''}
              onChange={(e) => setConfig({ ...config, anchoPapelPersonalizado: parseInt(e.target.value) || 210 })}
            />
          </div>
        )}

        <div>
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md">
            Guardar Configuración
          </button>
        </div>
      </form>
    </div>
  );
}

//export default ConfiguracionImpresoraForm;



