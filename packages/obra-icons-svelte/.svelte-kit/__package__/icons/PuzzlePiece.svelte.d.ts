import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: number;
        color?: string;
        strokeWidth?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PuzzlePieceProps = typeof __propDef.props;
export type PuzzlePieceEvents = typeof __propDef.events;
export type PuzzlePieceSlots = typeof __propDef.slots;
export default class PuzzlePiece extends SvelteComponentTyped<PuzzlePieceProps, PuzzlePieceEvents, PuzzlePieceSlots> {
}
export {};
