/**
 * Tracks progress of the graph construction and layout
 */
export default class Progress {
    constructor() {
      this.message = '';
      this.phase = 'none';
      this.download = {
        errors: [],
        remaining: 0,
        currentWord: '',
      };
      this.layout = {
        iteration: 0
      };
      this.working = true
      this.errors = [];
    }
  
    startDownload() {
      this.phase = 'download';
    }
  
    startLayout() {
      this.message = 'Finished download. Constructing layout...';
      this.phase = 'layout';
    }
  
    setLayoutCompletion(layoutCompletion) {
      if (this.phase === 'layout') {
        this.message = `Finished download. Constructing layout ${layoutCompletion}%...`;
      }
    }
  
    updateLayout(remaining, nextWord) {
      this.download.currentWord = nextWord;
      this.download.remaining = remaining;
      this.message = `Remaining: ${remaining}. Downloading ${nextWord}`;
    }

    doWork () {
      this.working = true;
    }
  
    done() {
      this.working = false;
    }

    fail( e ) {
        this.errors.push(e);
        this.working = false;
    }
  
    downloadError(message) {
      this.download.errors.push(message);
    }
  
    reset() {
      this.phase = 'none',
      this.download.errors = [];
      this.download.remaining = 0;
      this.download.currentWord = '';
      this.layout.iteration = 0;
      this.message = '';
      this.working = true;
    }
  }