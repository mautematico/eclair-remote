export class Channel {

    constructor(
        public nodeId: string,
        public state: string,
        public toLocalMsat: number,
        public toRemoteMsat: number,
        public isFunder?: boolean
    ) { }

}
