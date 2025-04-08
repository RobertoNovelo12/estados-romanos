# Validador de Números Romanos (1-100)

Este proyecto implementa un validador de números romanos utilizando un autómata finito determinista (DFA) para validar números romanos en el rango de 1 a 100.

## Descripción

Este validador toma una cadena de texto que representa un número romano e identifica si es válido o no. Si es válido, también devuelve el valor decimal correspondiente. Utiliza un autómata de estados para realizar la validación, mostrando los pasos detallados de las transiciones de estados para cada número romano ingresado.

## Características

- Valida números romanos desde `I` (1) hasta `C` (100).
- Muestra el valor decimal correspondiente del número romano si es válido.
- Muestra los pasos de las transiciones del autómata para verificar el número romano ingresado.
- Permite verificar si hay errores en la secuencia de números romanos.

## Funcionalidad

1. El usuario ingresa un número romano en el campo de texto.
2. Al hacer clic en el botón "Validar", el sistema valida el número romano.
3. Si el número es válido:
   - Muestra el número romano y su equivalente decimal.
   - Muestra los pasos de las transiciones del autómata que validan el número romano.
4. Si el número es inválido:
   - Muestra un mensaje de error indicando el problema y las transiciones inválidas.

## Uso

1. Clona este repositorio:
    ```bash
    git clone https://github.com/RobertoNovelo12/estados-romanos.git
    ```

2. Abre el archivo `index.html` en tu navegador para interactuar con el validador.


## Reglas Romanas Implementadas

El autómata valida los siguientes números romanos:

- **I (1)**, **II (2)**, **III (3)**
- **IV (4)**, **V (5)**, **VI (6)**, **VII (7)**, **VIII (8)**
- **IX (9)**, **X (10)**, **XX (20)**, **XXX (30)**, **XL (40)**
- **L (50)**, **LX (60)**, **LXX (70)**, **LXXX (80)**
- **XC (90)**
- **C (100)**

### Errores Comunes Detectados

El sistema también detecta y previene las siguientes secuencias incorrectas:

- Secuencias repetidas como `IIII`, `VV`, `XXXX`, `LL`, `CCCC`.
- Combinaciones incorrectas como `LC` (secuencia no válida).

## Autores

- Roberto Novelo (https://github.com/RobertoNovelo12)

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir al proyecto, por favor abre un **pull request** con tu mejora.
