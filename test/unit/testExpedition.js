TestExpedition = TestCase('Expedition');

TestExpedition.prototype.testsGetFrais = function() {
    assertEquals('Test frais pour 2kg', '9.00 €', getFrais(2));
    assertEquals('Test frais pour 101kg', '303.00 €', getFrais(101));
    assertEquals('Test frais pour 1001kg', '2502.50 €', getFrais(1001));
};