/* eslint-disable no-unused-vars */
import React from 'react';

export type ComponentKey = 'account';

export type ComponentRegistry = {
  [Key in ComponentKey]: React.FC;
};
