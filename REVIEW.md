## 📝 Revisión del Proyecto: Traffic Light - Carolina Robledo

### ✅ Aspectos Positivos

1. **Base funcional correcta**: Las luces estaban renderizadas y respondían al click.
2. **Uso de `useState` presente**: El estado activo del semáforo ya se manejaba con React.
3. **Efecto visual implementado**: Había diferenciación clara entre luz encendida y apagada.

### 🔍 Áreas de Mejora

#### 1. Toggle incompleto en click repetido

**Observación:** Al hacer click en una luz activa, no se apagaba (faltaba el comportamiento de toggle completo).

**Mejora aplicada en el PR:**
- `selectLight` ahora apaga la luz si se vuelve a hacer click sobre la misma.

**Impacto en rúbrica:** Funcionalidad Básica.

#### 2. Estructura de componentes

**Observación:** Toda la lógica estaba dentro de `Home.jsx`, con import no usado (`rigoImage`).

**Mejora aplicada en el PR:**
- Se extrajo un componente dedicado `TrafficLight.jsx`.
- `Home.jsx` quedó limpio, solo como contenedor.
- Se eliminó código/import innecesario.

**Impacto en rúbrica:** Código Limpio y Estructura.

#### 3. Estilos y clases condicionales más mantenibles

**Observación:** El enfoque `red-on/red-off` funcionaba, pero era menos escalable.

**Mejora aplicada en el PR:**
- Se migró a patrón de clases base + `glow` condicional.
- Estilos del semáforo movidos a `trafficLight.css`.

**Impacto en rúbrica:** Clases CSS condicionales y mantenibilidad.

#### 4. Bonus según rúbrica

**Mejora aplicada en el PR:**
- Botón `Next Light` (ciclo de luces).
- Botón `Reset` (apaga todas).
- Botón para añadir/quitar luz púrpura (extra light).

**Impacto en rúbrica:** Funcionalidades bonus.

## 📊 Evaluación Detallada (Estado Inicial)

### Criterios de Evaluación (Total: 85/100)

| Criterio | Puntos | Obtenido | Comentario |
|----------|--------|----------|------------|
| **Funcionalidad Básica** | 30 | 20 | Faltaba apagar luz con segundo click sobre la misma. |
| **Gestión del Estado con useState** | 20 | 20 | Implementado correctamente con `useState`. |
| **Código Limpio y Estructura** | 15 | 10 | Import sin uso y lógica concentrada en un solo componente. |
| **Clases CSS Condicionales** | 15 | 15 | Clases dinámicas funcionales. |
| **Event Handlers** | 10 | 10 | `onClick` con funciones flecha correcto. |
| **CSS y Estilos** | 10 | 10 | Diseño claro y glow visible. |
| **TOTAL** | **100** | **85** | **Aprobado (límite)** |

### Desglose de Puntos Perdidos (-15 puntos)

1. **-10 puntos** - Toggle incompleto en click repetido (encendido/apagado de la misma luz).
2. **-5 puntos** - Limpieza/estructura (import no usado y componente sin separación).

## 🚀 Cómo Llegar a 100/100

Aplicando los cambios de este PR:
- ✅ +10 puntos - Toggle completo por click repetido.
- ✅ +5 puntos - Mejor estructura y limpieza (componente dedicado + sin código innecesario).

**= 100/100** 🎉

### Bonus implementado en PR

- ✅ `Next Light`
- ✅ `Reset`
- ✅ Luz extra púrpura con botón de añadir/quitar

### 📊 Resumen

| Aspecto | Estado |
|---------|--------|
| Funcionalidad base | ✅ Correcta |
| Toggle completo | ⚠️ Faltaba en entrega inicial |
| Estructura React | ⚠️ Mejorable |
| CSS/UX visual | ✅ Buena |

**Nota final:** Buen trabajo en la base del ejercicio. Con las correcciones aplicadas en el PR, el proyecto queda alineado con la rúbrica y con una estructura más cercana a la solución de referencia.
