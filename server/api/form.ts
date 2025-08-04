import { highSchools, classes, baccalaureates } from "./content";

export default defineEventHandler(() => {
    const getRandom = <T>(list: T[]): T =>
        list[Math.floor(Math.random() * list.length)];

    return {
        highSchool: getRandom(highSchools),
        classe: getRandom(classes),
        baccalaureate : getRandom(baccalaureates)
    };
});
