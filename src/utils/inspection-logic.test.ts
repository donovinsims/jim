import test from 'node:test';
import assert from 'node:assert/strict';
import {
  isWithinServiceArea,
  formatPhoneNumber,
  validateContactForm,
  calculateInspectionScope
} from './inspection-logic.ts';

test('isWithinServiceArea correctly identifies Janesville and Rock County cities', () => {
  assert.equal(isWithinServiceArea('Janesville').covered, true);
  assert.equal(isWithinServiceArea('53548').covered, true);
  assert.equal(isWithinServiceArea('Beloit').covered, true);
  assert.equal(isWithinServiceArea('Milton').covered, true);
  assert.equal(isWithinServiceArea('Edgerton').covered, true);
  assert.equal(isWithinServiceArea('Madison').covered, true);
  assert.equal(isWithinServiceArea('Chicago').covered, false);
});

test('formatPhoneNumber formats raw digits into standard telephone format', () => {
  assert.equal(formatPhoneNumber('6085755680'), '(608) 575-5680');
  assert.equal(formatPhoneNumber('16085755680'), '(608) 575-5680');
});

test('validateContactForm checks required fields accurately', () => {
  const invalid = validateContactForm({
    name: '',
    phone: '123',
    email: 'bad-email',
    address: '',
    serviceType: ''
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.phone);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.address);
  assert.ok(invalid.errors.serviceType);

  const valid = validateContactForm({
    name: 'Sarah Miller',
    phone: '(608) 555-0199',
    email: 'sarah@example.com',
    address: '1420 Milwaukee Ave, Janesville, WI',
    serviceType: 'pre-purchase'
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('calculateInspectionScope produces structured focus areas and builder advantages', () => {
  const scope = calculateInspectionScope({
    sqft: 2200,
    yearBuilt: 1965,
    propertyType: 'single-family',
    includeRadon: true
  });
  assert.ok(scope.estimatedDurationHours.includes('hours'));
  assert.ok(scope.recommendedFocusAreas.some(f => f.includes('Foundation')));
  assert.ok(scope.recommendedFocusAreas.some(f => f.includes('knob-and-tube') || f.includes('electrical')));
  assert.ok(scope.builderAdvantagePoints.length >= 2);
  assert.equal(scope.radonRecommended, true);
});
