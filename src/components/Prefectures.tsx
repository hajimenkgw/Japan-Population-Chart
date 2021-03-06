import React, { useCallback, useState, VFC } from 'react'

import type { Prefecture } from '@/types/Prefecture'

import styles from '@/styles/Prefectures.module.css'

// TODO: Checkboxは文脈によらない単なるUIコンポーネントにすべき
// 現状ではinterfaceの制約が強すぎるので、例えば以下のような改善をしたい
// - 引数をPartialにする
// - prefCode, prefNameではなく、idやlabelなどより一般的な名前にする
// - on, off関数で引数の制約を持たないようにする
// 本アプリでは都道府県名しか用途がないので一旦これで良しとしている
type ToggleFunc = {
  on: (prefCode: number, prefName: string) => void
  off: (prefCode: number, prefName: string) => void
}
type CheckBoxProps = Prefecture & ToggleFunc

export const CheckBox: VFC<CheckBoxProps> = ({
  prefCode,
  prefName,
  on,
  off,
}) => {
  const [isOn, setIsOn] = useState(false)
  const toggle = useCallback(() => {
    setIsOn((state) => !state)
  }, [])

  const handleChange = () => {
    if (isOn) {
      off(prefCode, prefName)
    } else {
      on(prefCode, prefName)
    }
    toggle()
  }

  return (
    <label htmlFor={prefName} className={styles.label}>
      <input
        id={prefName}
        type="checkbox"
        name={prefName}
        checked={isOn}
        onChange={handleChange}
      />
      {prefName}
    </label>
  )
}

type Props = {
  prefList: Prefecture[]
} & ToggleFunc

export const Prefectures: VFC<Props> = ({ prefList, on, off }) => {
  return (
    <div className={styles.container}>
      <span>
        <strong>都道府県</strong>
      </span>
      <div className={styles.list}>
        {prefList.map(({ prefCode, prefName }) => {
          return (
            <CheckBox
              key={prefCode}
              prefName={prefName}
              prefCode={prefCode}
              on={on}
              off={off}
            />
          )
        })}
      </div>
    </div>
  )
}
