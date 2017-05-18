export function* timeStream() {
    while (true) {
        yield Date.now()
    }
}
