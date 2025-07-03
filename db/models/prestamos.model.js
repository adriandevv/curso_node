import {Model, DataTypes} from 'sequelize';

const PRESTAMOS_TABLE  = 'prestamos';

const PrestamoSchema= {
     idPrestamo: {
    type: DataTypes.INTEGER(7).UNSIGNED, // Tipo entero sin signo con máximo 7 dígitos
    allowNull: false,                    // No permite valores nulos
    primaryKey: true,                    // Define esta columna como clave primaria
    autoIncrement: true,                 // Valor se incrementa automáticamente
  },
  grupo: {
    type: DataTypes.STRING(45),          // Tipo cadena con máximo 45 caracteres
    allowNull: false,                    // No permite valores nulos
  },
  fecha_desembolso: {
    type: DataTypes.STRING(45),          // Tipo cadena con máximo 45 caracteres
    allowNull: false,                    // No permite valores nulos
  },
  monto: {
    type: DataTypes.FLOAT,               // Tipo número decimal
    allowNull: false,                    // No permite valores nulos
  },
  monto_semanal: {
    type: DataTypes.DOUBLE,              // Tipo número decimal de doble precisión
    allowNull: false,                    // No permite valores nulos
  },
  fecha_inicio: {
    type: DataTypes.DATE,                // Tipo fecha y hora
    allowNull: false,                    // No permite valores nulos
  },
  fecha_final: {
    type: DataTypes.DATE,                // Tipo fecha y hora
    allowNull: false,                    // No permite valores nulos
  },
  ciclo: {
    type: DataTypes.INTEGER(11),         // Tipo entero con máximo 11 dígitos
    allowNull: false,                    // No permite valores nulos
  },
  estado: {
    type: DataTypes.STRING(45),          // Tipo cadena con máximo 45 caracteres
    allowNull: false,                    // No permite valores nulos
    defaultValue: "PENDIENTE",           // Valor predeterminado
  },
  asesor: {
    type: DataTypes.INTEGER(11),         // Tipo entero con máximo 11 dígitos
    allowNull: false,                    // No permite valores nulos
    references: {                        // Define una referencia (clave foránea)
      model: "asesores",                 // Tabla referenciada
      key: "idAsesor",                   // Columna referenciada
    },
  },
  interes: {
    type: DataTypes.INTEGER(11),         // Tipo entero con máximo 11 dígitos
    allowNull: false,                    // No permite valores nulos
  },
  zona: {
    type: DataTypes.INTEGER,             // Tipo entero
    allowNull: false,                    // No permite valores nulos
    references: {                        // Define una referencia (clave foránea)
      model: "zonas",                    // Tabla referenciada
      key: "idZona",                     // Columna referenciada
    },
  },
  sucursal: {
    type: DataTypes.INTEGER(2).UNSIGNED, // Tipo entero sin signo con máximo 2 dígitos
    allowNull: false,                    // No permite valores nulos
    references: {                        // Define una referencia (clave foránea)
      model: "sucursales",               // Tabla referenciada
      key: "idSucursal",                 // Columna referenciada
    },
  },
  idDesembolso: {
    type: DataTypes.INTEGER(11),         // Tipo entero con máximo 11 dígitos
    allowNull: true,                     // Permite valores nulos
    references: {                        // Define una referencia (clave foránea)
      model: "desembolsos",              // Tabla referenciada
      key: "idDesembolso",               // Columna referenciada
    },
  },
  metodo: {
    type: DataTypes.STRING(10),          // Tipo cadena con máximo 10 caracteres
    allowNull: false,                    // No permite valores nulos
  },
  dv: {
    type: DataTypes.INTEGER(2).UNSIGNED, // Tipo entero sin signo con máximo 2 dígitos
    allowNull: false,                    // No permite valores nulos
    defaultValue: 0,                     // Valor predeterminado
  },
  individual: {
    type: DataTypes.TINYINT(1),          // Tipo entero pequeño (0 o 1 para booleano)
    allowNull: false,                    // No permite valores nulos
    defaultValue: 0,                     // Valor predeterminado es 0 (no es individual)
  },
  plazo: {
    type: DataTypes.INTEGER(11),         // Tipo entero con máximo 11 dígitos
    allowNull: false,                    // No permite valores nulos
    defaultValue: 4,                     // Valor predeterminado
  },
  frecuencia: {
    type: DataTypes.INTEGER(11),         // Tipo entero con máximo 11 dígitos
    allowNull: false,                    // No permite valores nulos
    defaultValue: 7,                     // Valor predeterminado (7 días)
  },
  numero_pagos: {
    type: DataTypes.INTEGER(11),         // Tipo entero con máximo 11 dígitos
    allowNull: false,                    // No permite valores nulos
    defaultValue: 16,                    // Valor predeterminado
  },
  capturadoPor: {
    type: DataTypes.INTEGER(11),         // Tipo entero con máximo 11 dígitos
    allowNull: true,                     // Permite valores nulos
    references: {                        // Define una referencia (clave foránea)
      model: "usuarios",                 // Tabla referenciada
      key: "idUsuarios",                 // Columna referenciada
    },
  },
  finalizadoPor: {
    type: DataTypes.INTEGER(11),         // Tipo entero con máximo 11 dígitos
    allowNull: true,                     // Permite valores nulos
    references: {                        // Define una referencia (clave foránea)
      model: "usuarios",                 // Tabla referenciada
      key: "idUsuarios",                 // Columna referenciada
    },
  },
}


class Prestamos extends Model {
    static associate(models){

    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PRESTAMOS_TABLE,
            modelName: 'Prestamos',
            timestamps: false, // Desactiva los timestamps si no son necesarios
        }
    }

}


export { PRESTAMOS_TABLE, PrestamoSchema, Prestamos };