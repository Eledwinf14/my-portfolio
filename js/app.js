<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portafolio</title>
    <link rel="stylesheet" href="css/app.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link  rel="preconnect" href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js"></script>
    <script src="js/app.js"></script>

</head>

<body>
    <div id="cursor"></div>

    <div class="circulos">
        <svg class="circulo circulo1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path class="path"
                d="M63,-21.4C71.5,5.6,61.1,37.7,37.8,55.5C14.4,73.3,-21.9,76.8,-40.1,62C-58.3,47.2,-58.4,14.1,-48.7,-14.6C-39,-43.3,-19.5,-67.5,3.9,-68.8C27.3,-70.1,54.6,-48.3,63,-21.4Z"
                transform="translate(100 100)" />
        </svg>
        <svg class="circulo circulo2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path class="path"
                d="M48.4,-59.5C62.8,-45.7,74.5,-30.4,75.8,-14.6C77.1,1.3,68.2,17.7,56.3,27.1C44.4,36.4,29.6,38.6,15.1,45.6C0.7,52.6,-13.5,64.3,-21.6,60.8C-29.7,57.2,-31.6,38.3,-39.7,23.4C-47.8,8.4,-62,-2.5,-64.7,-15.6C-67.3,-28.6,-58.4,-43.8,-45.7,-58C-33,-72.1,-16.5,-85.2,0.3,-85.5C17,-85.8,34.1,-73.4,48.4,-59.5Z"
                transform="translate(100 100)" />
        </svg>
        <svg class="circulo circulo3" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path class="path"
                d="M40.4,-64.6C46.9,-51,42.9,-31.8,41.6,-17.8C40.3,-3.7,41.8,5.2,37.1,9.8C32.5,14.4,21.7,14.8,14.5,23.5C7.3,32.2,3.7,49.3,-2.2,52.3C-8,55.4,-16.1,44.3,-21.8,35C-27.5,25.8,-30.9,18.5,-37.2,9.6C-43.5,0.7,-52.6,-9.7,-52,-18.6C-51.4,-27.4,-41,-34.8,-30.7,-47.2C-20.4,-59.6,-10.2,-77,3.4,-81.6C17,-86.3,34,-78.2,40.4,-64.6Z"
                transform="translate(100 100)" />
        </svg>
        <svg class="circulo circulo4" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path class="path"
                d="M32.1,20.5C18.8,41.6,-30.5,43.9,-41.9,23.9C-53.2,4,-26.6,-38.1,-2,-39.2C22.7,-40.4,45.4,-0.5,32.1,20.5Z"
                transform="translate(100 100)" />
        </svg>
    </div>

    <header class="header">
        <h1 class="h1"><a href="#inicio" class="a" title="Eduin Fabian Ardila Ruiz">Eduin Fabian Ardila Ruiz</a></h1>
        <nav class="nav">
            <ul class="ul">
                <li class="li"><a href="#" title="Inicio" class="#Inicio">Inicio</a></li>
                <li class="li"><a href="#" title="Curriculum" class="#Curriculum">Curriculum</a></li>
                <li class="li"><a href="#" title="Works" class="#Works">Works</a></li>
                <li class="li"><a href="#" title="About" class="#About">About</a></li>
            </ul>
        </nav>
    </header>
    <main class="main">

        <div class="seccion" id="inicio">
            <section class="info">
                <h2 class="h2">Eduin fabian ardila ruiz</h2>
                <h3 class="h3" style="color: rgba(0, 0, 0, 0.3);">FrontEnd Developer</h3>

                <section style="min-height: 20vh;border: none;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);
                box-sizing: border-box;" class="seccion works" id="works">
                    <br>
                    <div class="grid">
                        <article class="article">
                            <figure class="figure">
                                <img height="150px" src="assets/197246325_l_normal_none.jpg" alt="imagen" class="img" loading="lazy">
                            </figure>
                            <ul class="ul">
                                <li class="li"><a href="https://github.com/Eledwinf14" class="a" title="Github">Visitar mi GitHub </br><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="svg"
                            viewBox="0 0 16 16">
                            <path
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg></a></li>
                                <li class="li"><a href="https://www.linkedin.com/in/eduin-fabian-ardila-ruiz-54a46722b/" class="a" title="LinkedIn">Visitar mi LinkedIn </br><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="svg"
                            viewBox="0 0 16 16">
                            <path
                                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg></a></li>
                            </ul>
                        </article>
                    </div>
                </section> 
            </section>
        </div>
        <section class="seccion Curriculum" id="curriculum">
            <h2>aqui mi Curriculum vitae</h2>
            <a href="../src/hojadevidaBogota2023.pdf" download>Descargar archivo</a>
        </section>

        <section class="seccion works" id="works">
            <h2 class="h2">Trabajos</h2>
            <p class="p">Hola aqui te presento algunos de mis proyectos personales </br>
               donde he puesto en practica lo aprendido.
                por ejemplo esta pagina esta hecha 100% con HTML,Css yJavascript :)</p>
            <div class="grid">
                <article class="article">
                    <a class="a" href="https://vue-3-2023-f2064.web.app/login" title="Vue3">
                        <figure class="figure">
                            <img src="assets/ExternalLink_34564765655.jpg" alt="imagen" class="img" loading="lazy">
                        </figure>
                        <h4 class="h4">Proyecto en Vue3, Vite, Firebase, Pinia, antDesingVue</h4>
                    </a>
                </article>
                <article class="article">
                    <a class="a" href="#" title="No disponible server caido :( ">
                        <figure class="figure">
                            <img style="width: 300px;height: 180px;" src="assets/descarga.png" alt="imagen" class="img" loading="lazy">
                        </figure>

                        <h4 class="h4">Proyecto con Angular</h4>
                    </a>
                </article>
                <article class="article">
                    <a class="a" href="https://vuetifychat-c107d.web.app/" title="Vue3 vuetify3 firebase">
                        <figure class="figure">
                            <img height="150px" src="assets/og-image.png" alt="imagen" class="img" loading="lazy">
                        </figure>

                        <h4 class="h4">Chat tiempo real con Vue3 Vuetify3</h4>
                    </a>
                </article>
                <article class="article">
                    <a class="a" href="" title="no disponible server caido :( ">
                        <figure class="figure">
                            <img style="height: 150px;width: 300px;" src="assets/descarga222.png" alt="imagen" class="img" loading="lazy">
                        </figure>

                        <h4 class="h4">Aplicacion con react</h4>
                    </a>
                </article>
            </div>
        </section>
        <section class="seccion about">
            <h2>Sobre mi</h2>
            <p class="p" id="p">Persona amable, responsable, creativa un apasionado por el desarrollo web las TI y nuevas tecnologias,alguien recursivo, proactivo, autodidacta. En busqueda permanente del conocimiento trabajo con amor y dedicacion para superarme dia a dia</p>
            
            <ul class="redes">
                <li class="li">
                    <a href="https://github.com/Eledwinf14" class="a" title="Github" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="svg"
                            viewBox="0 0 16 16">
                            <path
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </a>
                </li>
                <li class="li">
                    <a href="https://www.linkedin.com/in/eduin-fabian-ardila-ruiz-54a46722b" class="a" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="svg"
                            viewBox="0 0 16 16">
                            <path
                                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                    </a>
                </li>
            </ul>
        </section>
    </main>
    <footer class="footer">
        <span>Hecho con amor ♥ Eduin Fabian Ardila Ruiz</span>

    </footer>
</body>

</html>
