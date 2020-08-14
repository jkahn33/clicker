import React from 'react';
import ClickerButtons from './components/admin/ClickerButtons';
import { company } from '../mock-objects/company';

export default function Clicker() {
  return <ClickerButtons company={company} />;
}
