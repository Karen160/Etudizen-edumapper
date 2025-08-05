import { d as defineEventHandler, c as createError } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const highSchools = [
  "Etienne Dolet",
  "Lyc\xE9e priv\xE9 Charles de Foucauld",
  "Lyc\xE9e polyvalent Guillaume Tirel",
  "Lyc\xE9e polyvalent l'Initiative",
  "Lyc\xE9e polyvalent priv\xE9 Saint Jean de Montmartre",
  "Lyc\xE9e priv\xE9 Pascal",
  "Lyc\xE9e du b\xE2timent et des travaux publics",
  "Lyc\xE9e polyvalent priv\xE9 Saint-Nicolas",
  "Lyc\xE9e priv\xE9 La Rochefoucauld",
  "Lyc\xE9e technique priv\xE9 de l'\xE9cole technique sup\xE9rieure du laboratoire",
  "Lyc\xE9e priv\xE9 Charles P\xE9guy",
  "Lyc\xE9e priv\xE9 Sainte-Louise",
  "Lyc\xE9e priv\xE9 L'Ecole alsacienne",
  "Lyc\xE9e polyvalent ESAA-Ecole Boulle",
  "Lyc\xE9e polyvalent Paul Poiret",
  "Lyc\xE9e Charlemagne",
  "Lyc\xE9e Claude Monet",
  "Lyc\xE9e priv\xE9 Lucien de Hirsch",
  "Lyc\xE9e priv\xE9 Saint-Michel de Picpus"
];
const classes = [
  "Seconde",
  "Premi\xE8re",
  "Terminale"
];
const baccalaureates = [
  "G\xE9n\xE9ral",
  "Professionnel",
  "Technologique"
];

const form = defineEventHandler(() => {
  try {
    const getRandom = (list) => list[Math.floor(Math.random() * list.length)];
    return {
      highSchool: getRandom(highSchools),
      classe: getRandom(classes),
      baccalaureate: getRandom(baccalaureates)
    };
  } catch (error) {
    console.error("API /form error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Server crashed in /api/form"
    });
  }
});

export { form as default };
//# sourceMappingURL=form.mjs.map
