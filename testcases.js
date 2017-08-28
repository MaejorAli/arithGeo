let chai = require('chai');
let assert = require('chai').assert;
let expect = require('chai').expect;
let myApp = require('../src/aritgeo.js');




describe("Arithmetic progression", () => {
       it("Should return Arithmetic", () => {
            assert.equal(myApp.aritGeo([2,4,6,8,10]), "Arithmetic");
        });
    });

    
    describe('aritGeo', function() {
    describe("Geometric Pogression", () => {
        it("Should return Geometric", () => {
            assert.equal(myApp.aritGeo([2,6,18,54]), "Geometric");
        });
    });


    describe("Zero", () => {
        it("Should return empty array", () => {
            assert.equal(myApp.aritGeo([]), 0 );
        });
    });
    describe("Undefined", () => {
        it("Should return -1", () => {
            assert.equal(myApp.aritGeo([23,54,655,765]), -1);
        });
    });
});