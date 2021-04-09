import { takeEvery, put } from 'redux-saga/effects'
import { saveRequestData } from '../actions/getData'
import { SEND_REQUEST } from '../constants/constants.js'
import openDataDB from '../service/openDataDB'

function* workerLoadData() {
    const opendata = new openDataDB()

    try {
        let data = yield opendata.getData()
        yield put(saveRequestData(data))
    } catch (err) {
        console.log('error', err)
    }
}

export function* watchLoadData() {
    yield takeEvery(SEND_REQUEST, workerLoadData)
}