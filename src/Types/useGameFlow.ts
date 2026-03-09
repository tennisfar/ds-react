export type ResultState =
  | 'gameCompletedLotGranted'
  | 'gameCompletedAlreadyGranted'
  | 'gameFailedLotNotGranted'
  | 'gameFailedAlreadyGranted'
  | 'gameAlreadyCompleted'
  | undefined;