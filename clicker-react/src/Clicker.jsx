import React from 'react';
import ClickerButtons from './components/admin/ClickerButtons';
import { company } from '../mock-objects/company';
import HomeClickerPage from './components/admin/HomeClickerPage';

export default function Clicker() {
  return <HomeClickerPage company={company} />;
}
