import { highSchools, classes, baccalaureates } from "~/utils/content";

export default defineEventHandler(() => {
    try {
        const getRandom = <T>(list: T[]): T =>
            list[Math.floor(Math.random() * list.length)];

        return {
            highSchool: getRandom(highSchools),
            classe: getRandom(classes),
            baccalaureate: getRandom(baccalaureates)
        };
    } catch (error) {
        console.error('API /form error:', error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Server crashed in /api/form'
        });
    }
});
