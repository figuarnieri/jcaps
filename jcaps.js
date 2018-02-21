class JCaps{
  constructor(args){
    this.args = args;
    document.addEventListener('keyup', (e) => e.getModifierState('CapsLock') ? this.on() : this.off());
    const _event = new KeyboardEvent('keyup');
    document.dispatchEvent(_event);
  }
  on(){
    if(this.args.on) this.args.on();
  }
  off(){
    if(this.args.off) this.args.off();
  }
}