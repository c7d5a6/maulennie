import { Component } from '@angular/core';
import {environment} from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentApplicationVersion = environment.appVersion;
  title = 'mauliennie';
  input = '';
  output = '';

  convert(event: Event) {
    event.stopPropagation();
    console.log("hey");
    this.output = this.replaceText(this.input);
  }

  replaceMiak = (text: string) => {
    let result = text;
    const regexpS1 = /с(?=(([сзлмнцпбв]|дз)[ёеяіюь]))/gi;
    const regexpS2 = /(?<=((^|[.,;:—-])( ?)((цера|бе|ра|у|ў)?)))с(?=( ([сзлмнцпбв]|дз)[ёеяіюь]))/gi;

    const regexpZ1 = /з(?=(([сзлмнцпбв]|дз)[ёеяіюь]))/gi;
    const regexpZ2 = /(?<=((^|[.,;:—-])( ?)((цера|бе|ра|у|ў)?)))з(?=( ([сзлмнцпбв]|дз)[ёеяіюь]))/gi;

    const regexpC1 = /ц(?=(в[ёеяіюь]))/gi;

    const regexpC2 = /ц(?=(ц[ёеяіюь]))/gi;
    const regexpN1 = /н(?=(н[ёеяіюь]))/gi;
    const regexpL1 = /л(?=(л[ёеяіюь]))/gi;

    result = result.replace(regexpS1, 'сЬ');
    result = result.replace(regexpS2, 'сЬ');
    result = result.replace(regexpZ1, 'зЬ');
    result = result.replace(regexpZ2, 'зЬ');
    result = result.replace(regexpC1, 'цЬ');
    result = result.replace(regexpC2, 'цЬ');
    result = result.replace(regexpN1, 'нЬ');
    result = result.replace(regexpL1, 'лЬ');
    return result;
  }

  replaceI = (text: string) => {
    let result = text;
    const regexpII = /(?<=([ёуеыаоэяію])( ))і(?=( ))/gi;

    const regexpY = /(?<=([йцншўзфвпрлджчсмтб])( ))і/gi;

    const regexpI1 = /(?<=(^|[.,;:—-])( ?))і(?=([ёйцукенгшўзх'фывапролджэячсмітьбю]))/gi;
    const regexpI2 = /(?<=(^|[ \(\n]))і(?=(х|хні|м|мі|ншы)([,.!?;\):\] \n]))/gi;
    const regexpI3 = /(?<=([ёуеыаоэяію])( ?))і/gi;

    result = result.replace(regexpII, '[й]');
    result = result.replace(regexpI1, '[й]і');
    result = result.replace(regexpI2, '[й]і');
    result = result.replace(regexpI3, '[й]і');
    result = result.replace(regexpY, '[ы]');
    return result;
  }

  replaceT = (text: string) => {
    let result = text;
    const regexpT1 = /т(?=([бдг]))/gi;
    const regexpT2 = /т(?=([ц]))/gi;
    const regexpT3 = /т(?=([ч]))/gi;

    result = result.replace(regexpT1, '[д]');
    result = result.replace(regexpT2, '[ц]');
    result = result.replace(regexpT3, '[ч]');
    return result;
  }

  replaceD = (text: string) => {
    let result = text;
    const regexpD1 = /(?<!((^|[ .,!;?\n])(([пн]|пер)?)а))д(?=([ .,!;?\n]))/gi;
    const regexpD2 = /д(?=(( ?)[кшхфпт]))/gi;
    const regexpD3 = /д(?=(дз[ёеяіюь]))/gi;
    const regexpD41 = /(?<=((^|[ .,!;?\n])(([пн]|пер)?)а))д(?=(( ?)[цс][ёеяіюь]))/gi;
    const regexpD42 = /(?<=((^|[ .,!;?\n])(([пн]|пер)?)а))д(?=(( ?)[цс]))/gi;
    const regexpD43 = /д(?=(ц[ёеяіюь]))/gi;
    const regexpD44 = /д(?=(ц))/gi;
    const regexpD5 = /д( ?)с(?=(( ?)[тк]))/gi;
    const regexpD6 = /д(?=([ч]))/gi;

    result = result.replace(regexpD2, '[т]');
    result = result.replace(regexpD3, '[дзь]');
    result = result.replace(regexpD41, '[ць]');
    result = result.replace(regexpD42, '[ц]');
    result = result.replace(regexpD43, '[ць]');
    result = result.replace(regexpD44, '[ц]');
    result = result.replace(regexpD5, '[ц]');
    result = result.replace(regexpD6, '[ч]');
    result = result.replace(regexpD1, '[т]');
    return result;
  }

  replaceS = (text: string) => {
    let result = text;
    const regexpS11 = /с(?=([гздб]|дз|дж))/gi;
    const regexpS12 = /сь(?=([гздб]|дз|дж))/gi;
    const regexpS2 = /с(?=([шч]))/gi;

    result = result.replace(regexpS11, '[з]');
    result = result.replace(regexpS12, '[зь]');
    result = result.replace(regexpS2, '[ш]');
    return result;
  }

  replaceZ = (text: string) => {
    let result = text;
    const regexpZ11 = /(?<!д)зь(?=(( ?)[псц]))/gi;
    const regexpZ12 = /(?<!д)з(?=(( ?)[псцткх]))/gi;
    const regexpZ21 = /(?<!( ((цера|бе|ра|у|ў)?))|д)з(?=([ .,!;?\n]))/gi;
    const regexpZ22 = /(?<!( ((цера|бе|ра|у|ў)?))|д)зь(?=([ .,!;?\n]))/gi;
    const regexpZ3 = /з(?=(( ?)[шч]))/gi;
    const regexpZ4 = /з(?=(( ?)(ж|дж)))/gi;

    result = result.replace(regexpZ4, '[ж]');
    result = result.replace(regexpZ3, '[ш]');
    result = result.replace(regexpZ11, '[сь]');
    result = result.replace(regexpZ12, '[с]');
    result = result.replace(regexpZ21, '[с]');
    result = result.replace(regexpZ22, '[сь]');
    return result;
  }

  replaceSH = (text: string) => {
    let result = text;
    const regexpSH1 = /ш(?=(ск))/gi;
    const regexpSH2 = /(?<=([ёуеыаоэяію]))ш(?=(с[ёуеыаоэяію]))/gi;

    result = result.replace(regexpSH1, '[]');
    result = result.replace(regexpSH2, '[сь]');
    return result;
  }

  replaceZH = (text: string) => {
    let result = text;
    const regexpSH1 = /ж(?=(ск))/gi;
    const regexpSH2 = /(?<=([ёуеыаоэяію]))ж(?=(с[ёуеыаоэяію]))/gi;
    const regexpSH3 = /ждж(?=([ ,.?!;\n]))/gi;
    const regexpSH4 = /(?<!д)ж(?=(( ?)[псцткхчш]))/gi;
    const regexpSH5 = /(?<!(^|^а| | а|\n|\nа)|д)ж(?=([ ,.?!;\n]))/gi;
    const regexpSH6 = /(?= (а?))ж(?=( [псцткхчш]))/gi;

    result = result.replace(regexpSH1, '[]');
    result = result.replace(regexpSH2, '[сь]');
    result = result.replace(regexpSH3, '[шч]');
    result = result.replace(regexpSH4, '[ш]');
    result = result.replace(regexpSH5, '[ш]');
    result = result.replace(regexpSH6, '[ш]');
    return result;
  }

  replaceDZH = (text: string) => {
    let result = text;
    const regexpDZH = /дж(?=([ ,.?!;\n]))/gi;

    result = result.replace(regexpDZH, '[ч]');
    return result;
  }

  replaceСH = (text: string) => {
    let result = text;
    const regexpСH = /ч(?=ц)/gi;

    result = result.replace(regexpСH, '[ц]');
    return result;
  }

  replaceDZ = (text: string) => {
    let result = text;
    const regexpDZ11 = /дз(?=([ .,!;?\n]))/gi;
    const regexpDZ12 = /дзь(?=([ .,!;?\n]))/gi;
    const regexpDZ2 = /дзь(?=([псчцткх]))/gi;

    result = result.replace(regexpDZ11, '[ц]');
    result = result.replace(regexpDZ12, '[ць]');
    result = result.replace(regexpDZ2, '[ць]');
    return result;
  }

  replaceС = (text: string) => {
    let result = text;
    const regexpС1 = /ц(?=([бг]))/gi;
    const regexpС2 = /ць(?=([бг]))/gi;

    result = result.replace(regexpС1, '[дз]');
    result = result.replace(regexpС2, '[дзь]');
    return result;
  }

  replaceH = (text: string) => {
    let result = text;
    const regexpH1 = /г(?=([ .,!;?\n]))/gi;
    const regexpH2 = /г(?=([псцчткх]))/gi;

    result = result.replace(regexpH1, '[х]');
    result = result.replace(regexpH2, '[х]');
    return result;
  }

  replaceK = (text: string) => {
    let result = text;
    const regexpK1 = /к(?=([здг]))/gi;

    result = result.replace(regexpK1, '[ґ]');
    return result;
  }

  replaceB = (text: string) => {
    let result = text;
    const regexpSH1 = /б(?=(( ?)[псцткхчш]))/gi;
    const regexpSH2 = /(?<!(^|^а|^ка| | а| ка|\n|\nа|\nка))б(?=([ ,.?!;\n]))/gi;
    const regexpSH3 = /(?= ((ка|а)?))б(?=( [псцткхчш]))/gi;

    result = result.replace(regexpSH1, '[п]');
    result = result.replace(regexpSH2, '[п]');
    result = result.replace(regexpSH3, '[п]');
    return result;
  }


  replaceText = (text: string) => {
    let result: string = text;
    result = this.replaceMiak(result);
    result = this.replaceI(result);
    result = this.replaceT(result);
    result = this.replaceD(result);
    result = this.replaceS(result);
    result = this.replaceZ(result);
    result = this.replaceSH(result);
    result = this.replaceZH(result);
    result = this.replaceDZH(result);
    result = this.replaceСH(result);
    result = this.replaceDZ(result);
    result = this.replaceС(result);
    result = this.replaceH(result);
    result = this.replaceK(result);
    result = this.replaceB(result);

    const regex1 = /Ь/g;
    const regex2 = /\]\[/gi;

    result = result.replace(regex1, '[ь]');
    result = result.replace(regex2, '');

    return result;
  }
}
