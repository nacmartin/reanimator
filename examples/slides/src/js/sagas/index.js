import { take, put, call, actionChannel } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'

import Constants from '../constants/'

function sagator(reanimator) {
  return eventChannel(emitter => {
      reanimator.setDispatcher(action => {
          emitter(action)
      })
      return () => {
        reanimator.setDispacher(null)
      }
    }
  )
}

export default function* rootSaga(reanimator) {
    yield take(Constants.START_ANIMATION)

    reanimator.setState({
        streams: [ 'TIME' ],
        outputs: [ 'x' ],
        systems: [
            {
                input: 'TIME',
                output: 'x',
                domain: [Date.now(), Date.now() + 1000],
                range: [100, 200],
                easing: 'linear',
            },
        ]
    })
    const chan = yield call(sagator, reanimator)
    while (true) {

        let action = yield take(chan)
        yield put(action)
    }
}
