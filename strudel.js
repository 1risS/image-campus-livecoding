setCpm(170 / 4)

let po = p => stack(p, p.osc())

$: po(
  s('[~ ~ ~ cp:1]')
    .every(4, x =>
      x
        .struct('t(<3>,8)')
        .chop('<3 3 4 3 4>')
        .speed('<-1 1 0.75>')
        .delay('<0.5>')
        .delaytime('<0.25 0.125 0.33>')
        .delayfeedback('<0.25 0.33 0.33> ')
        .room(0.5)
        .roomsize('<1 2 4>')
    )
    .gain(1)
)

// $:s("cp").scrub("{0.1!2 .25@3 0.7!2 <0.8:1.5>}%8").gain(0)

// $:s("oceandrum".scrub("[0.125, 0.25, 0.75, 1]".fast(2)))

$drums: stack(
  s('bd:1').beat('0,7,10?', 16).duck('3:4:5'),
  s('sd:1').beat('<4 12>', 16),
  s('hh:4!16')
)
  .djf(slider(0.618))
  .orbit(7)
  .rib(0, 1 / 4)
  ._scope()
  .gain(0)

$riser: s('pulse!16')
  .dec(0.05)
  .fm(time / 2)
  .fmh(time / 2)
  .orbit(2)
  .gain(slider(0))

$bajo: s('supersaw!8')
  .note('<c# e d# [d# a#2]>'.sub('[12 0]'.fast(2)))
  .every(16, x => x.djf(sine.segment(16).range(0, 1).slow(1)).orbit(2))
  .every(4, x => x.chop('<8 6 3>'))
  .every(8, x => x.note('[c# d# e]'.slow(2).sub(12)))
  .lpenv('2')
  .pan(sine.slow(2))
  .gain(slider(0))
