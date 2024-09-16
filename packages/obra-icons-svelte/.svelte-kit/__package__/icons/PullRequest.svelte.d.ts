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
export type PullRequestProps = typeof __propDef.props;
export type PullRequestEvents = typeof __propDef.events;
export type PullRequestSlots = typeof __propDef.slots;
export default class PullRequest extends SvelteComponentTyped<PullRequestProps, PullRequestEvents, PullRequestSlots> {
}
export {};
