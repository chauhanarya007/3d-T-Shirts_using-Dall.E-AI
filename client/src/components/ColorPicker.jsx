import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker 
        color={snap.color}
        disableAlpha
        presetColors={[
            '#971B2F', '#AA0061', '#00843D', '#006269', '#B33D26', '#D977A9', '#C8C9C7',
            '#4A3041', '#776A60', '#8D2838', '#7BA4DB', '#F0EC74' 
        ]
        }
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker