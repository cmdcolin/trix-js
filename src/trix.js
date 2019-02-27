class Trix {
  constructor({
    trixFilehandle,
    trixPath,
    ixxFilehandle,
    ixxPath
  }) {
    if (trixFilehandle) {
      this.trix = trixFilehandle
    } else if (trixPath) {
      this.trix = new LocalFile(trixPath)
    }

    if (ixxFilehandle) {
      this.ixx = new IXX({ filehandle: ixxFilehandle })
    } else if (ixxPath) {
      this.ixx = new IXX({
        filehandle: new LocalFile(ixxPath),
      })
    }
  }
}

export default Trix
