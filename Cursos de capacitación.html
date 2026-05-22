import streamlit as st
import requests
import os

# CONFIGURACIÓN DE PÁGINA (Debe ser estrictamente lo primero)
st.set_page_config(
    page_title="Mickey 17 - Matemáticas IV",
    layout="centered"
)

# INTERFAZ DE CABECERA: Imagen de Portada Centrada
# Buscamos el archivo bajo formatos comunes para evitar fallos de mayúsculas en Linux
imagen_portada = "Mikey.jpeg"
if not os.path.exists(imagen_portada):
    imagen_portada = "mickey.jpeg"

if os.path.exists(imagen_portada):
    # Creamos 3 columnas virtuales. La del centro (proporción 2) contendrá la imagen
    col1, col2, col3 = st.columns([1, 2, 1])
    with col2:
        st.image(imagen_portada, use_column_width=True)
else:
    # Mensaje de respaldo si la imagen aún no se ha procesado en el servidor
    st.info("Cargando interfaz del tutor inteligente...")

# GUÍA DE MATEMÁTICAS IV (Base de Conocimiento)
GUIA_MATEMATICAS_IV = """
GUÍA MATEMÁTICAS IV

UNIDAD 1: Estadística descriptiva y leyes de exponentes
1. Durante el primer parcial de Matemáticas, Ana obtuvo las siguientes calificaciones en 5 exámenes: 8.5, 9.0, 7.5, 8.0 y 9.5. ¿Cuál es el promedio final?
2. El número de libros que leyeron 7 estudiantes de primer semestre durante las vacaciones fue: 3, 1, 4, 2, 5, 1, 6. ¿Cuál es la mediana de libros leídos?
3. En una encuesta sobre el medio de transporte que usan 15 estudiantes para llegar a la Prepa UNAM: Metro, Metro, Camión, Bicicleta, Metro, Camión, Metro, Auto, Camión, Metro, Bicicleta, Metro, Camión, Auto, Metro. ¿Cuál es la moda?
4. Tiempos en minutos de 8 estudiantes: 12, 15, 10, 18, 12, 20, 12, 25. a) Media aritmética. b) Mediana. c) ¿Qué medida representa mejor el tiempo típico?
5. Dinero gastado: $45, $30, $50, $30, $60, $30, $75. a) Media, mediana y moda. b) Si un nuevo estudiante gastó $100, ¿cómo cambiaría la media?
6. Medidas de tendencia central con 25 datos proporcionados.
7. Leyes de exponentes, simplificación y notación científica.

UNIDAD 2: Operaciones algebraicas y productos notables
8. Operaciones algebraicas (Suma, resta, multiplicación y división de polinomios).
9. Productos notables (Binomio al cuadrado).
10. Factorización por Factor Común.
11. Factorización por Diferencia de Cuadrados.
12. Factorización de Trinomio Cuadrado Perfecto.
13. Factorización de Trinomio de la forma x^2 + bx + c.

UNIDAD 3: Ecuaciones de primer y segundo grado
14. Ecuaciones de primer grado lineales y fraccionarias.
15. Problemas de aplicación con ecuaciones de primer grado (edades, perímetros, cerdos y gallinas).
16. Ecuaciones cuadráticas por Fórmula General.
17. Ecuaciones de segundo grado incompletas.

UNIDAD 4: Sistemas de ecuaciones
18. Sistemas de ecuaciones por métodos de suma y resta, sustitución, igualación y determinantes.

UNIDAD 5: Desigualdades
19. Desigualdades e inecuaciones lineales y con intervalos.
"""

# ESTILO CSS PERSONALIZADO (Estilo Cyber-Tech limpio)
st.markdown("""
<style>
    .stApp { background-color: #0f172a; color: #e2e8f0; }
    
    .main-header {
        text-align: center;
        background: #1e293b;
        padding: 1.2rem;
        border-radius: 12px;
        border-bottom: 4px solid #a78bfa;
        margin-top: 1rem;
        margin-bottom: 1.5rem;
    }
    
    .main-header h1 {
        color: #c084fc !important;
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        margin: 0;
        font-size: 1.8rem;
    }

    [data-testid="stChatMessage"] {
        background-color: #1e293b !important;
        border-radius: 8px;
        margin-bottom: 10px;
    }
    
    [data-testid="stChatMessage"] p {
        color: #f1f5f9 !important;
    }
    
    textarea {
        background-color: #1e293b !important;
        color: #f1f5f9 !important;
    }
</style>
""", unsafe_allow_html=True)

# Título de la aplicación debajo de la imagen de cabecera
st.markdown('<div class="main-header"><h1>🧬 MICKEY 17: Sistema de Tutoría Inteligente</h1></div>', unsafe_allow_html=True)

# LÓGICA DE MENSAJES Y CONFIGURACIÓN DEL HISTORIAL
if "messages" not in st.session_state:
    st.session_state.messages = []

# PROMPT DEL SISTEMA PARA MICKEY 17
SYSTEM_PROMPT = f"""Eres "Mickey 17", una Inteligencia Artificial especializada en la tutoría de Matemáticas IV para bachillerato. Tu base de datos conceptual es este temario de la guía: {GUIA_MATEMATICAS_IV}.

REGLAS CRÍTICAS DE COMPORTAMIENTO:
1. INICIO Y DIAGNÓSTICO: Si el historial de conversación está vacío, debes dar la bienvenida de forma atenta, explicar brevemente que estás aquí para ayudar a estudiar de cara al examen y preguntar explícitamente:
   - ¿Qué unidad de la guía te gustaría revisar hoy?
   - ¿Qué ejercicio o tipo de problema te está causando conflicto?
2. ESTRATEGIA SOCRÁTICA (PROHIBIDO DAR LA RESPUESTA DIRECTA): No resuelvas los ejercicios del estudiante de forma inmediata. Tu labor es guiar paso a paso. Propón un ejercicio muy similar o divide el problema actual en pasos pequeños (máximo 3).
3. ACTIVACIÓN COGNITIVA: Antes de dar fórmulas, pregunta al estudiante qué recuerda del concepto, como por ejemplo las medidas de tendencia central o leyes de signos.
4. FORMATO MATEMÁTICO RIGUROSO: Debes utilizar obligatoriamente notación en bloques o en línea de LaTeX para cualquier expresión matemática (ejemplo: $x^2 - 5x - 36 = 0$ o $\\frac{{a^6}}{{b^{{-8}}}}$) para asegurar una visualización clara.
5. CIERRE DE TURNO: Termina cada una de tus intervenciones con una pregunta directa, clara y corta que invite al estudiante a escribir o calcular el siguiente paso del ejercicio.
6. TONO: Empático, paciente, con un estilo de colega experto en la materia."""

# RENDERIZAR EL HISTORIAL DE CHAT
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

# MENSAJE DE BIENVENIDA INICIAL AUTOMÁTICO
if len(st.session_state.messages) == 0:
    welcome_text = "¡Hola! Soy **Mickey 17**, tu tutor especializado para el examen de Matemáticas IV. Vamos a dominar estos temas paso a paso para que te vaya excelente.\n\nPara empezar de forma organizada, cuéntame: **¿Qué unidad de la guía te gustaría revisar hoy y qué ejercicio te está causando problemas?**"
    st.session_state.messages.append({"role": "assistant", "content": welcome_text})
    with st.chat_message("assistant"):
        st.markdown(welcome_text)

# CAPTURA DE ENTRADA DEL USUARIO
if prompt := st.chat_input("Escribe aquí tu duda o respuesta al ejercicio..."):
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user"):
        st.markdown(prompt)

    # GENERACIÓN DE RESPUESTA USANDO PETICIÓN HTTP DIRECTA A GROQ
    with st.chat_message("assistant"):
        try:
            api_key = st.secrets["GROQ_API_KEY"]
            
            api_messages = [{"role": "system", "content": SYSTEM_PROMPT}]
            for msg in st.session_state.messages:
                api_messages.append({"role": msg["role"], "content": msg["content"]})
                
            headers = {
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json"
            }
            
            data = {
                "model": "llama-3.3-70b-versatile",
                "messages": api_messages,
                "temperature": 0.5,
                "max_tokens": 2048
            }
            
            response = requests.post("https://api.groq.com/openai/v1/chat/completions", headers=headers, json=data)
            
            if response.status_code == 200:
                full_response = response.json()["choices"][0]["message"]["content"]
                st.markdown(full_response)
                st.session_state.messages.append({"role": "assistant", "content": full_response})
            else:
                st.error(f"Error de comunicación con Groq (Código {response.status_code}): {response.text}")
            
        except Exception as e:
            st.error(f"Error en el sistema de tutoría Mickey 17: {e}")

# INTERFAZ DE SOPORTE EN LA BARRA LATERAL
st.sidebar.markdown("### Control de Sesión")
if st.sidebar.button("Reiniciar Tutoría (Reset)"):
    st.session_state.messages = []
    st.rerun()
