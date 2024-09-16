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
export type CloudDownloadAltProps = typeof __propDef.props;
export type CloudDownloadAltEvents = typeof __propDef.events;
export type CloudDownloadAltSlots = typeof __propDef.slots;
export default class CloudDownloadAlt extends SvelteComponentTyped<CloudDownloadAltProps, CloudDownloadAltEvents, CloudDownloadAltSlots> {
}
export {};
