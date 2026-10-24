import { describe, expect, it } from 'vitest';
import { sumaPares } from './src/sumaPares.js';

describe('sumaPares ocultos', () => {
    it('suma pares negativos', () => {
        expect(sumaPares([-2, -3, -4])).toBe(-6);
    });

    it('trata el cero como par', () => {
        expect(sumaPares([0, 1, 0])).toBe(0);
    });

    it('ignora los impares en una lista larga', () => {
        const lista = Array.from({ length: 1000 }, (_, i) => i + 1);
        expect(sumaPares(lista)).toBe(250500);
    });
});
