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
export type ExternalLinkProps = typeof __propDef.props;
export type ExternalLinkEvents = typeof __propDef.events;
export type ExternalLinkSlots = typeof __propDef.slots;
export default class ExternalLink extends SvelteComponentTyped<ExternalLinkProps, ExternalLinkEvents, ExternalLinkSlots> {
}
export {};
