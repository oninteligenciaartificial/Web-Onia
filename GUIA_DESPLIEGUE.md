# 📦 Guía para subir tu web a GitHub y desplegar en Hostinger

¡Hola! Ya he preparado el terreno para ti. He inicializado el repositorio local de Git y he guardado todos los archivos en un "Initial commit". 

Aquí tienes el paso a paso detallado para subirlo a la nube y luego a Hostinger.

## 🚀 Paso 1: Crea el Repositorio en GitHub

1.  Abre [github.com/new](https://github.com/new) en tu navegador.
2.  **Nombre del repositorio:** `web-onia` (o el que tú prefieras).
3.  **Privacidad:** Puedes elegir **Public** o **Private**.
4.  **IMPORTANTE:** No marques ninguna casilla de inicialización (README, .gitignore, o License). Ya los tenemos configurados.
5.  Haz clic en **"Create repository"**.

## 🔗 Paso 2: Conecta tu proyecto con GitHub

Copia y pega estos comandos uno por uno en tu terminal (en la misma carpeta donde estás):

```bash
# Cambiamos el nombre de la rama principal por defecto de git a 'main'
git branch -M main

# Añadimos la dirección de tu nuevo repositorio
git remote add origin https://github.com/oninteligenciaartificial/web-onia.git

# Subimos tu código a la nube (te pedirá iniciar sesión si no lo has hecho)
git push -u origin main
```
> [!NOTE]
> Si GitHub te pide autenticación, lo más fácil es seleccionar **"Sign in with browser"**.

## ☁️ Paso 3: Despliega en Hostinger

Una vez que el código esté en GitHub, Hostinger tiene una integración directa que es la mejor opción:

1.  Entra al **hPanel de Hostinger**.
2.  Ve a **Sitios Web** -> **Administrar** (el sitio donde quieres la web).
3.  En el menú de la izquierda, busca **Avanzado** -> **GIT**.
4.  En la sección **"Desplegar desde GitHub"**, haz clic en **Conectar cuenta de GitHub**.
5.  Selecciona el repositorio `web-onia`.
6.  En **Rama**, elige `main`.
7.  **IMPORTANTE (Próximos pasos):** Como tu web es un proyecto **Next.js**, Hostinger necesitará saber cómo construirlo.
    - Si tu plan de Hostinger soporta **Node.js**: Se autodetectará.
    - Si tienes un plan compartido básico: Necesitarás configurar el **Static Export**. (Dime si este es tu caso y te explico cómo adaptarlo).

---

### ¿Qué acabo de automatizar por ti?
Para que no perdieras tiempo, ya ejecuté estos comandos internamente:
1. `git init`: Preparé la base de datos de Git.
2. `git add .`: Preparé cada archivo de tu proyecto.
3. `git commit -m "Initial commit"`: Los guardé de forma segura.

> [!TIP]
> **¿Qué sigue?** Sigue el Paso 2 en tu terminal. Si tienes algún error al conectar el repositorio, ¡pégamelo aquí y lo resolvemos juntos!
