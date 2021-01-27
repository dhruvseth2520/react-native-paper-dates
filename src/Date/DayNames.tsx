import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import DayName from './DayName'
import { useTheme } from 'react-native-paper'
import { DisableWeekDaysType, showWeekDay } from './dateUtils'

export const dayNamesHeight = 44

// TODO: wait for a better Intl api ;-)
const weekdays = [
  'Su',
  'Mo',
  'Tu',
  'We',
  'Th',
  'Fr',
  'Sa',
]

function DayNames({
  disableWeekDays,
  locale,
}: {
  locale: undefined | string
  disableWeekDays?: DisableWeekDaysType
}) {
  const theme = useTheme()
  const shortDayNames = React.useMemo<string[]>(() => {
    return weekdays;
  }, [locale])

  return (
    <View
      style={[styles.dayNames, { backgroundColor: theme.colors.surface }]}
      pointerEvents={'none'}
    >
      {shortDayNames
        .filter((_, dayIndex) => showWeekDay(dayIndex, disableWeekDays))
        .map((dayName, i) => (
          <DayName key={`${dayName}_${i}`} label={dayName} />
        ))}
    </View>
  )
}
const styles = StyleSheet.create({
  dayNames: {
    height: dayNamesHeight,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
})
export default React.memo(DayNames)
