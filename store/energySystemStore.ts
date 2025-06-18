import { create } from 'zustand';

interface EnergySystemState {
  inverterActive: boolean;
  switchActive: boolean;
  showHeroSection: boolean;
  showTagSection: boolean;
  booting: boolean;
  animationsPaused: boolean;
  setInverterActive: (active: boolean) => void;
  setSwitchActive: (active: boolean) => void;
  setShowHeroSection: (show: boolean) => void;
  setShowTagSection: (show: boolean) => void;
  setBooting: (booting: boolean) => void;
  toggleAnimations: () => void;
}

export const useEnergySystemStore = create<EnergySystemState>((set) => ({
  inverterActive: false,
  switchActive: false,
  showHeroSection: true,
  showTagSection: true,
  booting: false,
  animationsPaused: false,
  setInverterActive: (active) => set({ inverterActive: active }),
  setSwitchActive: (active) => set({ switchActive: active }),
  setShowHeroSection: (show) => set({ showHeroSection: show }),
  setShowTagSection: (show) => set({ showTagSection: show }),
  setBooting: (booting) => set({ booting }),
  toggleAnimations: () => set((state) => ({ animationsPaused: !state.animationsPaused })),
}));