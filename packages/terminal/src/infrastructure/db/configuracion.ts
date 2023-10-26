
import Dexie, { Table } from 'dexie';

interface ConfiguracionImpresora {
  id?: number;
  impresionAutomatica: boolean;
  tamanioPapel: string;
  anchoPapelPersonalizado: number;
}

export class SubClassedDexie extends Dexie {
  
  confImprimir!: Table<ConfiguracionImpresora>; 

  constructor() {
    super('teminalMSP');
    this.version(1).stores({
      confImprimir: '++id, impresionAutomatica, tamanioPapel,anchoPapelPersonalizado' 
    });
  }
}

export const frontendDb = new SubClassedDexie();

