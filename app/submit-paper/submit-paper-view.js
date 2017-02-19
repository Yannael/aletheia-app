const $ = require('jQuery')
const EventEmitter = require('events').EventEmitter

class SubmitPaperView extends EventEmitter {

  constructor () {
    super()
    $('#the-file-to-upload').on('click', () => {
      this.emit('clickSelectFile')
    })
  }

  showError (msg) {
    $('#status-bar').text(msg)
  }

  showEthereumError (msg) {
    $('#status-bar-ethereum').text(msg)
  }

  showUploadSuccess ({path, hash}) {
    $('#error-div').hide()
    $('#upload-success-div').show()
    $('#upload-success-file-name').text(path)
    $('#upload-success-file-id').text(hash)
  }

  showUploadError ({path}) {
    $('#upload-success-div').hide()
    $('#error-div').show()
    $('#error-div').text(`Unable to share file ${path}`)
  }

  setPeers (numPeers) {
    $('#status-bar').text(`${numPeers} alethia filesystem peers connected`)
  }

  setEthereumPeers (numPeers) {
    $('#status-bar-ethereum').text(`${numPeers} aletheia blockchain peers connected`)
  }
}
module.exports = new SubmitPaperView()
