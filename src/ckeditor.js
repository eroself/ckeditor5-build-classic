/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';
import DecoupledEditorBase from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave';
import PendingActions from '@ckeditor/ckeditor5-core/src/pendingactions';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import RestrictedEditingMode from '@ckeditor/ckeditor5-restricted-editing/src/restrictededitingmode';
import StandardEditingMode from '@ckeditor/ckeditor5-restricted-editing/src/standardeditingmode';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';

export class ClassicEditor extends ClassicEditorBase {}
export class InlineEditor extends InlineEditorBase {}
export class DcoupledEditor extends DecoupledEditorBase {}
export class BalloonEditor extends BalloonEditorBase {}

// Plugins to include in the build.
const plugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Autosave,
	Alignment,
	Bold,
	Italic,
	Underline,
	Strikethrough,
	Code,
	Subscript,
	Superscript,
	BlockQuote,
	CKFinder,
	Clipboard,
	CodeBlock,
	EasyImage,
	Base64UploadAdapter,
	Heading,
	Highlight,
	HorizontalLine,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	ImageResize,
	Indent,
	Link,
	List,
	MediaEmbed,
	Mention,
	Paragraph,
	PasteFromOffice,
	PageBreak,
	PendingActions,
	RemoveFormat,
	RemoveFormatLinks,
	RestrictedEditingMode,
	StandardEditingMode,
	SpecialCharacters,
	SpecialCharactersEssentials,
	TodoList,
	Table,
	TableToolbar,
	TableProperties,
	TableCellProperties,
	TextTransformation
];

// Editor configuration.
const config = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'code',
			'subscript',
			'superscript',
			'removeFormat',
			'|',
			'link',
			'bulletedList',
			'numberedList',
			'horizontalLine',
			'pageBreak',
			'specialCharacters',
			'|',
			'indent',
			'outdent',
			'alignment',
			'codeBlock',
			'highlight',
			'restrictedEditing',
			'restrictedEditingException',
			'todoList',
			'|',
			'imageUpload',
			'ckfinder',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableProperties',
			'tableCellProperties'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};

ClassicEditor.builtinPlugins = plugins;
InlineEditor.builtinPlugins = plugins;
BalloonEditor.builtinPlugins = plugins;
DcoupledEditor.builtinPlugins = plugins;

ClassicEditor.defaultConfig = config;
InlineEditor.defaultConfig = config;
BalloonEditor.defaultConfig = config;
DcoupledEditor.defaultConfig = config;

export default {
	ClassicEditor, InlineEditor, BalloonEditor, DcoupledEditor
};

function RemoveFormatLinks( editor ) {
	// Extend the editor schema and mark the "linkHref" model attribute as formatting.
	editor.model.schema.setAttributeProperties( 'linkHref', {
		isFormatting: true
	} );
}
