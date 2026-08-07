# Strudel + OSC → TouchDesigner

Recursos y setup para la clase de live coding con Strudel, enviando datos OSC a TouchDesigner.

---

## Comunidad

| Recurso | Link |
|---|---|
| Comunidad global (TOPLAP) | http://toplap.org/ |
| Nodos autogestivos | https://blog.toplap.org/nodes/ |
| Nodo argentino | https://colectivo-de-livecoders.gitlab.io/ |

---

## Herramientas de live coding

| Herramienta | Link |
|---|---|
| Hydra (visuals) | https://hydra.ojack.xyz/ |
| Strudel (audio) | https://strudel.cc/ |
| Awesome Live Coding (más techs) | https://github.com/toplap/awesome-livecoding |
| Documentación de configuración multicanal en Strudel | https://strudel.cc/learn/effects/#orbits |

---

## Documentales

- [Live Coding: A User's Manual](https://www.youtube.com/watch?v=ntFMuvv2-TY&t=8s)
- [Algorave Generation](https://www.youtube.com/watch?v=6OpvVXkP3io)

---

## Setup: Strudel → OSC → TouchDesigner

Este proyecto incluye un servidor Node.js que recibe mensajes desde Strudel vía WebSocket y los reenvía como mensajes OSC a TouchDesigner.

### Requisitos

- [Node.js](https://nodejs.org/es/download)

### Instalación

```bash
npm install
```

### Uso

```bash
node server.js
```

El servidor escucha WebSockets en el puerto `8080` y reenvía los mensajes OSC a `127.0.0.1:3000`.

### Tutorial: recibir OSC en TouchDesigner

- [How to receive OSC in TouchDesigner](https://www.youtube.com/watch?v=24DY4vRZgdg)

---

## Presentación

| Recurso | Link |
|---|---|
| Slides | https://www.figma.com/deck/PrTRx0ogfL8jIYqAXuCjHR/Image-Campus?node-id=7-34&t=m8rzh74aeouhvgsU-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1 |



