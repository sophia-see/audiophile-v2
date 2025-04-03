"use client"

import Button from '@/components/shared/Button'
import NumberPicker from '@/components/shared/NumberPicker'
import React from 'react'

export default function ProductActionButtons() {
  const [value, setValue] = React.useState(1);

  return (
    <div className='flex items-center gap-4'>
      <NumberPicker value={value} setValue={setValue} className='w-[120px]'/>
      <Button className='w-[160px] justify-center'>Add to cart</Button>
    </div>
  )
}
