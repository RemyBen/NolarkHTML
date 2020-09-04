TestExpedition = TestCase('Expedition');

TestExpedition.prototype.testsGetFrais = function() {
    assertEquals('Test frais pour 2kg', '180.00 €', getFrais(40));
    assertEquals('Test frais pour 101kg', '525.00 €', getFrais(125));
    assertEquals('Test frais pour 1001kg', '3725.00 €', getFrais(1230));
};