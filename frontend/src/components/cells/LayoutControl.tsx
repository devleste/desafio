'use client';

import { useSystem } from '@context/useSystem';
import React from 'react';
import { CiBoxList, CiGrid41 } from 'react-icons/ci';

const LayoutControl = () => {
  const { layoutMode, setLayoutMode }: any = useSystem();
  return (
    <div className="layout_btns text-3xl flex cursor-pointer gap-1">
      <div
        onClick={() => {
          setLayoutMode('list');
        }}
        className={`${
          layoutMode == 'list' && 'bg-white shadow'
        } rounded-md transition-all grid place-content-center p-1`}
      >
        <CiBoxList />
      </div>
      <div
        onClick={() => {
          setLayoutMode('grid');
        }}
        className={`${
          layoutMode == 'grid' && 'bg-white shadow'
        } rounded-md transition-all grid place-content-center p-1`}
      >
        <CiGrid41 />
      </div>
    </div>
  );
};

export default LayoutControl;
