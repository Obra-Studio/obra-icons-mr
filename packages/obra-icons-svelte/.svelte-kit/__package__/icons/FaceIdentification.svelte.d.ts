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
export type FaceIdentificationProps = typeof __propDef.props;
export type FaceIdentificationEvents = typeof __propDef.events;
export type FaceIdentificationSlots = typeof __propDef.slots;
export default class FaceIdentification extends SvelteComponentTyped<FaceIdentificationProps, FaceIdentificationEvents, FaceIdentificationSlots> {
}
export {};
