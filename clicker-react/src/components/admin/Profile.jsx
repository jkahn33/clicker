import React, { useState } from 'react';
import { Label, Container, Item, Form, Input } from 'native-base';
import { company } from '../../../mock-objects/company';

export default function Profile() {
  const [companyObj, setCompanyObj] = useState(company);

  const updateCompany = (name, value) => {
    setCompanyObj((companyObj) => ({ ...companyObj, [name]: value }));
  };

  // TODO add validation
  return (
    <Container>
      <Form>
        <Item stackedLabel>
          <Label>Company Name</Label>
          <Input
            value={companyObj.name}
            onChangeText={(text) => updateCompany('name', text)}
          />
        </Item>
        <Item stackedLabel>
          <Label>Address Line 1</Label>
          <Input
            value={companyObj.addressLine1}
            onChangeText={(text) => updateCompany('addressLine1', text)}
          />
        </Item>
        <Item stackedLabel>
          <Label>Address Line 2</Label>
          <Input
            value={companyObj.addressLine2}
            onChangeText={(text) => updateCompany('addressLine2', text)}
          />
        </Item>
        <Item stackedLabel>
          <Label>City</Label>
          <Input
            value={companyObj.city}
            onChangeText={(text) => updateCompany('city', text)}
          />
        </Item>
        <Item stackedLabel>
          <Label>State</Label>
          <Input
            value={companyObj.stateOrProvince}
            onChangeText={(text) => updateCompany('stateOrProvince', text)}
          />
        </Item>
        <Item stackedLabel>
          <Label>Zip</Label>
          <Input
            value={companyObj.postalCode}
            onChangeText={(text) => updateCompany('postalCode', text)}
          />
        </Item>
      </Form>
    </Container>
  );
}
