import { describe, expect, it } from 'vitest';
import { sumaPares } from './src/sumaPares.js';

describe('sumaPares', () => {
    it('suma los pares de una lista', () => {
        expect(sumaPares([1, 2, 3, 4])).toBe(6);
    });

    it('devuelve 0 con una lista vacia', () => {
        expect(sumaPares([])).toBe(0);
    });

    it('devuelve 0 si no hay pares', () => {
        expect(sumaPares([1, 3, 5])).toBe(0);
    });
});
