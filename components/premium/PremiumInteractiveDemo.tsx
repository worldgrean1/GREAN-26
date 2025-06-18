'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface PremiumInteractiveDemoProps {
  showInfoPanel: boolean;
  setShowInfoPanel: (show: boolean) => void;
  containerWidth: number;
  containerHeight: number;
  onSwitchChange?: (active: boolean) => void;
}

export default function PremiumInteractiveDemo({
  showInfoPanel,
  setShowInfoPanel,
  containerWidth,
  containerHeight,
  onSwitchChange
}: PremiumInteractiveDemoProps) {
  const [switchActive, setSwitchActive] = useState(false);
  const [inverterActive, setInverterActive] = useState(false);

  const handleSwitchToggle = () => {
    const newState = !switchActive;
    setSwitchActive(newState);
    onSwitchChange?.(newState);
  };

  const handleInverterToggle = () => {
    setInverterActive(!inverterActive);
  };

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-3 gap-8 items-center">
          {/* Solar Panel */}
          <motion.div
            className="w-24 h-16 bg-blue-600 rounded-lg flex items-center justify-center"
            animate={{ scale: switchActive ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-white text-xs font-bold">SOLAR</div>
          </motion.div>

          {/* Switch */}
          <motion.button
            onClick={handleSwitchToggle}
            className={`w-16 h-8 rounded-full transition-colors duration-300 ${
              switchActive ? 'bg-green-500' : 'bg-gray-400'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-6 h-6 bg-white rounded-full shadow-md"
              animate={{ x: switchActive ? 8 : -8 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Inverter */}
          <motion.button
            onClick={handleInverterToggle}
            className={`w-24 h-16 rounded-lg flex items-center justify-center transition-colors duration-300 ${
              inverterActive ? 'bg-green-600' : 'bg-gray-600'
            }`}
            animate={{ scale: inverterActive ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-white text-xs font-bold">INVERTER</div>
          </motion.button>
        </div>
      </div>

      {/* Energy Flow Animation */}
      {switchActive && (
        <motion.div
          className="absolute top-1/2 left-1/4 w-8 h-1 bg-yellow-400 rounded-full"
          animate={{ x: [0, 100, 200] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      )}
    </div>
  );
}