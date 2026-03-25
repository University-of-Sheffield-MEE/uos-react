export interface PropSpec {
  name: string;
  type: 'string' | 'boolean' | 'number' | 'ReactNode' | string;
  required: boolean;
  default?: unknown;
  mapsTo?:
    | { element: string; attribute: string }
    | { togglesClass: string; on: string };
}

export interface SubcomponentSpec {
  name: string;
  rootElement: string;
  rootClassName: string;
  props: PropSpec[];
}

export interface StorySpec {
  name: string;
  description: string;
  props: Record<string, unknown>;
}

export interface ComponentSpec {
  componentName: string;
  atomicType: 'atom' | 'molecule' | 'organism';
  childComponents?: string[];
  description: string;
  rootElement: string;
  rootClassName: string;
  selectorsCovered: string[];
  props: PropSpec[];
  subcomponents: SubcomponentSpec[];
  stories: StorySpec[];
  notes?: string;
  htmlExamples?: string[];
}
