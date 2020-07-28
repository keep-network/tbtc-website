---
template: resource
title: tBTC Güvenlik Modeli
heading: tBTC Güvenlik Modeli
description: >-
  Aşağıda, tBTC’nin güvenlik modeline ve bunun kullanıcılar ve imzalayanlar için
  nasıl yüksek düzeyde güvenlik sağladığına ilişkin bir genel bakış yer
  almaktadır.
date: 2020-07-28T20:37:03.584Z
tags:
  - security
---
<!--\[if gte mso 9]><xml>
 <o:OfficeDocumentSettings>
  <o:AllowPNG/>
 </o:OfficeDocumentSettings>
</xml><!\[endif]-->

<!--\[if gte mso 9]><xml>
 <w:WordDocument>
  <w:View>Normal</w:View>
  <w:Zoom>0</w:Zoom>
  <w:TrackMoves/>
  <w:TrackFormatting/>
  <w:PunctuationKerning/>
  <w:ValidateAgainstSchemas/>
  <w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid>
  <w:IgnoreMixedContent>false</w:IgnoreMixedContent>
  <w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText>
  <w:DoNotPromoteQF/>
  <w:LidThemeOther>EN-US</w:LidThemeOther>
  <w:LidThemeAsian>X-NONE</w:LidThemeAsian>
  <w:LidThemeComplexScript>X-NONE</w:LidThemeComplexScript>
  <w:Compatibility>
   <w:BreakWrappedTables/>
   <w:SnapToGridInCell/>
   <w:WrapTextWithPunct/>
   <w:UseAsianBreakRules/>
   <w:DontGrowAutofit/>
   <w:SplitPgBreakAndParaMark/>
   <w:EnableOpenTypeKerning/>
   <w:DontFlipMirrorIndents/>
   <w:OverrideTableStyleHps/>
  </w:Compatibility>
  <m:mathPr>
   <m:mathFont m:val="Cambria Math"/>
   <m:brkBin m:val="before"/>
   <m:brkBinSub m:val="&#45;-"/>
   <m:smallFrac m:val="off"/>
   <m:dispDef/>
   <m:lMargin m:val="0"/>
   <m:rMargin m:val="0"/>
   <m:defJc m:val="centerGroup"/>
   <m:wrapIndent m:val="1440"/>
   <m:intLim m:val="subSup"/>
   <m:naryLim m:val="undOvr"/>
  </m:mathPr></w:WordDocument>
</xml><!\[endif]-->

<!--\[if gte mso 9]><xml>
 <w:LatentStyles DefLockedState="false" DefUnhideWhenUsed="false"
  DefSemiHidden="false" DefQFormat="false" DefPriority="99"
  LatentStyleCount="371">
  <w:LsdException Locked="false" Priority="0" QFormat="true" Name="Normal"/>
  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 1"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 2"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 3"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 4"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 5"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 6"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 7"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 8"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 9"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 6"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 7"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 8"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 9"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 1"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 2"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 3"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 4"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 5"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 6"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 7"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 8"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 9"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Normal Indent"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="footnote text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="annotation text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="header"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="footer"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index heading"/>
  <w:LsdException Locked="false" Priority="35" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="caption"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="table of figures"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="envelope address"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="envelope return"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="footnote reference"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="annotation reference"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="line number"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="page number"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="endnote reference"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="endnote text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="table of authorities"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="macro"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="toa heading"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 5"/>
  <w:LsdException Locked="false" Priority="10" QFormat="true" Name="Title"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Closing"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Signature"/>
  <w:LsdException Locked="false" Priority="1" SemiHidden="true"
   UnhideWhenUsed="true" Name="Default Paragraph Font"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text Indent"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Message Header"/>
  <w:LsdException Locked="false" Priority="11" QFormat="true" Name="Subtitle"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Salutation"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Date"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text First Indent"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text First Indent 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Note Heading"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text Indent 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text Indent 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Block Text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Hyperlink"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="FollowedHyperlink"/>
  <w:LsdException Locked="false" Priority="22" QFormat="true" Name="Strong"/>
  <w:LsdException Locked="false" Priority="20" QFormat="true" Name="Emphasis"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Document Map"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Plain Text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="E-mail Signature"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Top of Form"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Bottom of Form"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Normal (Web)"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Acronym"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Address"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Cite"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Code"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Definition"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Keyboard"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Preformatted"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Sample"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Typewriter"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Variable"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Normal Table"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="annotation subject"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="No List"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Outline List 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Outline List 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Outline List 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Simple 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Simple 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Simple 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Colorful 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Colorful 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Colorful 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 6"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 7"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 8"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 6"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 7"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 8"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table 3D effects 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table 3D effects 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table 3D effects 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Contemporary"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Elegant"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Professional"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Subtle 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Subtle 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Web 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Web 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Web 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Balloon Text"/>
  <w:LsdException Locked="false" Priority="39" Name="Table Grid"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Theme"/>
  <w:LsdException Locked="false" SemiHidden="true" Name="Placeholder Text"/>
  <w:LsdException Locked="false" Priority="1" QFormat="true" Name="No Spacing"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 1"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 1"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 1"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 1"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 1"/>
  <w:LsdException Locked="false" SemiHidden="true" Name="Revision"/>
  <w:LsdException Locked="false" Priority="34" QFormat="true"
   Name="List Paragraph"/>
  <w:LsdException Locked="false" Priority="29" QFormat="true" Name="Quote"/>
  <w:LsdException Locked="false" Priority="30" QFormat="true"
   Name="Intense Quote"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 1"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 1"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 1"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 1"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 1"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 1"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 2"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 2"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 2"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 2"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 2"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 2"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 2"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 2"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 2"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 2"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 2"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 3"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 3"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 3"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 3"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 3"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 3"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 3"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 3"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 3"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 3"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 3"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 4"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 4"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 4"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 4"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 4"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 4"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 4"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 4"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 4"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 4"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 4"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 5"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 5"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 5"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 5"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 5"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 5"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 5"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 5"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 5"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 5"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 5"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 6"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 6"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 6"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 6"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 6"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 6"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 6"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 6"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 6"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 6"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 6"/>
  <w:LsdException Locked="false" Priority="19" QFormat="true"
   Name="Subtle Emphasis"/>
  <w:LsdException Locked="false" Priority="21" QFormat="true"
   Name="Intense Emphasis"/>
  <w:LsdException Locked="false" Priority="31" QFormat="true"
   Name="Subtle Reference"/>
  <w:LsdException Locked="false" Priority="32" QFormat="true"
   Name="Intense Reference"/>
  <w:LsdException Locked="false" Priority="33" QFormat="true" Name="Book Title"/>
  <w:LsdException Locked="false" Priority="37" SemiHidden="true"
   UnhideWhenUsed="true" Name="Bibliography"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="TOC Heading"/>
  <w:LsdException Locked="false" Priority="41" Name="Plain Table 1"/>
  <w:LsdException Locked="false" Priority="42" Name="Plain Table 2"/>
  <w:LsdException Locked="false" Priority="43" Name="Plain Table 3"/>
  <w:LsdException Locked="false" Priority="44" Name="Plain Table 4"/>
  <w:LsdException Locked="false" Priority="45" Name="Plain Table 5"/>
  <w:LsdException Locked="false" Priority="40" Name="Grid Table Light"/>
  <w:LsdException Locked="false" Priority="46" Name="Grid Table 1 Light"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark"/>
  <w:LsdException Locked="false" Priority="51" Name="Grid Table 6 Colorful"/>
  <w:LsdException Locked="false" Priority="52" Name="Grid Table 7 Colorful"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 1"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 1"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 1"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 1"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 1"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 1"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 2"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 2"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 2"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 2"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 2"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 2"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 3"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 3"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 3"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 3"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 3"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 3"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 4"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 4"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 4"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 4"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 4"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 4"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 5"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 5"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 5"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 5"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 5"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 5"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 6"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 6"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 6"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 6"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 6"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 6"/>
  <w:LsdException Locked="false" Priority="46" Name="List Table 1 Light"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark"/>
  <w:LsdException Locked="false" Priority="51" Name="List Table 6 Colorful"/>
  <w:LsdException Locked="false" Priority="52" Name="List Table 7 Colorful"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 1"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 1"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 1"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 1"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 1"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 1"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 2"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 2"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 2"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 2"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 2"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 2"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 3"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 3"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 3"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 3"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 3"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 3"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 4"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 4"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 4"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 4"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 4"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 4"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 5"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 5"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 5"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 5"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 5"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 5"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 6"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 6"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 6"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 6"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 6"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 6"/>
 </w:LatentStyles>
</xml><!\[endif]-->

<!--\[if gte mso 10]>
<style>
 /* Style Definitions */
 table.MsoNormalTable
	{mso-style-name:"Обычная таблица";
	mso-tstyle-rowband-size:0;
	mso-tstyle-colband-size:0;
	mso-style-noshow:yes;
	mso-style-priority:99;
	mso-style-parent:"";
	mso-padding-alt:0cm 5.4pt 0cm 5.4pt;
	mso-para-margin-top:0cm;
	mso-para-margin-right:0cm;
	mso-para-margin-bottom:10.0pt;
	mso-para-margin-left:0cm;
	line-height:115%;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;
	mso-ansi-language:TR;
	mso-fareast-language:EN-US;}
</style>
<!\[endif]-->

<!--StartFragment-->

tBTC, insanların Ethereum üzerinde Bitcoin kullanmalarının güvenli bir yolu olarak geliştirilmiştir. Farklı projeler, güvenlik için farklı yaklaşımlara sahiptir. Yazının devamında tBTC tarafından kullanılan güvenlik modeli ve kullanıcılar ve imzalayıcılar için nasıl üst düzey güvenlik sağladığına genel bir bakış atacağız.

**Minimum güven gerektiren bir Bitcoin yan zinciri**

Yan zincirler, Bitcoin’in diğer zincirler üzerindeki potansiyelini kullanmanın deneysel bir yolu olarak icat edilmişti. Bunun ardındaki fikir oldukça basit - BTC’yi ana Bitcoin blok zincirinde kilitle ve başka bir blok zinciri üzerinde kullanmak için onu açarak BTC’ye sabitlenmiş yeni bir para birimi yarat. Pratikte, güvenilir aracılar olmaksızın 2 yönlü bir sabit oluşturmak zordur. Blockstream’in Liquid ağı, güvenilir aracılara ihtiyaç duyan bir Bitcoin yan zincirine örnektir.

Liquid çalışıyor olsa da BTC’nin açıklığı ve güvenliğinden yoksundur. Liquid, “kilitlenmiş” bitcoin’i muhafaza etmeleri için güvenilir bir imzalayıcılar federasyonu kullanır. İmzalayıcılar keyfi olarak para çekme işlemlerini sansürleyebilir veya parayı alarak kayıplara karışabilirler. Ayrıca, imzalayıcıların kötü niyetli hareket etmeleri halinde kullanıcıların başvurabilecekleri bir yer yoktur - kullanıcılar tamamen Liquid ağı ve dayandığı teknolojiye güvenmek zorundadır.

tBTC, bu modele **minimum güven gerektiren** bir alternatif sunar. İmzalayıcılar, muhafaza ettikleri yatırımın değerinin %150’si gibi yüksek bir teminat göstermek zorundadır ve[imzalayıcı dolandırıcılıklarında](https://tbtc.network/developers/tbtc-security-model/#signer-fraud) kullanıcılar tamamen tazmin edilir. İmzalayıcılar, Keep protokolünü çalıştıran açık ve merkeziyetsiz bir düğümler ağında seçilir ve bunların her biri Ethereum üzerinde teminat göstermiştir.

Bitcoin’in Ethereum’da sabitlenmiş versiyonu olan 1 TBTC’yi üretmek için yapılması gereken şudur:

1. 1 BTC için imzalamak üzere Keep ağından teminatlı bir ECDSA keep’i talep edilir.
2. Bir**imzalayıcı grubu** oluşturulur ve **1 BTC’nin ETH cinsinden değerinin %150’sini** teminat gösterirler.
3. İmzalayıcı grubu, bir[eşik ECDSA protokolü](https://www.binance.vision/security/threshold-signatures-explained) kullanarak bir Bitcoin cüzdanı oluşturur.
4. Kullanıcı bu Bitcoin cüzdanına 1 BTC gönderir.
5. Kullanıcı, yatırma işleminin bir**[SPV ispatını](https://docs.keep.network/tbtc/#spv)**oluşturur ve bunu Ethereum zincirine gönderir.
6. Kullanıcı TBTC üretir.

TBTC’nin BTC’ye geri dönüştürülmesi bu sürecin tam tersidir:

1. Kullanıcı TBTC’yi yakar ve dönüştürmeye başlamak için bir alıcı Bitcoin adresi sağlar.
2. **İmzalayıcı grubu**, Bitcoin’i kullanıcının talep ettiği Bitcoin adresine göndermek için bir Bitcoin işlemi için imza oluşturur ve bunu yayınlar.
3. Kullanıcı bu işlemi ve oluşturulan imzayı Bitcoin ağında yayınlar.

İmzalayıcılar bu işlemin bir **SPV ispatı**nı oluşturur, bunu Ethereum zinciri üzerinde yayınlar ve teminatlarını geri alırlar.

Bu operasyona üç sistem dahildir:

1. Bitcoin’i muhafaza etmeleri için her yatırımda imzalayıcı federasyonları oluşturan Keep Ağı.
2. Ethereum ana zincirindeki imzalayıcıların ne kadar teminat göstermeleri gerektiğini belirlemek için kullanılan Bitcoin fiyat beslemesi.
3. TBTC üretmek ve yakmak için BTC işlemlerini doğrulayan Bitcoin iletimi

**İmzalayıcılardan oluşan merkeziyetsiz bir ağ**

tBTC, imzalayıcılardan oluşan her zaman online ve merkeziyetsiz bir ağ sunmak için[Keep Ağı](https://keep.network/)nı kullanır. Her bir imzalayıcı grubu, 3 düğümden oluşan bir bitcoin yatırımını muhafaza eder. Bu düğümler,[Keep random beacon](https://docs.keep.network/random-beacon/)kullanılarak büyük bir havuz içerisinden rastgele seçilir. Herhangi imzalayıcı dizisini manipüle etme olasılığı, Sybil direnci sağlayan KEEP tokeni stake etme modeli sayesinde azaltılır.

Hata veya dolandırıcılık gibi durumlarda kullanıcıların tazmin edilmesi için imzalayıcılar yatırılan bitcoin’in ETH cinsinden değerinin %150’si gibi yüksek bir oranda teminat göstermek zorundadır. tBTC imzalayıcı hataları ve imzalayıcı dolandırıcılıklarını imzalayıcıları cezalandırarak ve kullanıcıyı TBTC cinsinden tam olarak tazmin ederek yönetir, ayrıca imzalayıcının gelecekte çalışmayacağından da emin olur.

**İmzalayıcı hatası**

Bir takas talebine zamanında yanıt vermeyen imzalayıcılar bir imzalayıcı hatası teşkil eder. İmzalayıcı hatalarına, takas için bir imza oluşturmamanın yanı sıra takas için bir Bitcoin blokuna eklendiğinin SPV ispatını oluşturmama da dahil olabilir.

Tüm hatalar protokol iptali olarak ele alınır ve[likidasyon akışını iptali](https://docs.keep.network/tbtc/#redemption) başlatır. İmzalayıcı teminatlarına el konur ve kullanıcının erişemediği fonların tazmin edilmesi için TBTC karşılığında müzayedeye çıkarılır ve imzalayıcı teminatının kalanının yarısı (orijinal teminatın en fazla 1/6'sı) imzalayıcılara iade edilir.

İmzalayıcı grupları, likidasyondan kaynaklanan kayıplarını karşılamak için bir iptal başladıktan sonra BTC geri almayı tercih edebilirler. Referans istemci çevrimdışı koordinasyonu her bir imzalayıcıya bırakır.

**İmzalayıcı dolandırıcılığı**

İmzalayıcı dolandırıcılığı, tBTC sistemi içerisinde tam ve kesin ilişiğini kesme ile sonuçlanan eylemdir. tBTC protokolünün izni olmaksızın bitcoin transferi yapan, kendi çalışma tokenini yakan ve kullanıcının başvuracağı tüm teminatı alıkoyan her imzalayıcının ilişiği kesilir.

Dolandırıcılık, zincir üzerinde izinsiz imzanın dolandırıcılık ispatı olarak gösterilmesiyle kanıtlanır. Herkes bir dolandırıcılık ispatı sunabilir ve imzalayıcının teminatı müzayedeye çıkarıldıktan sonra kalan ETH’yi alabilir.

İmzalayıcı dolandırıcılığı hem tBTC hem de Keep ECDSA protokollerinde cezalandırılmaktadır.

1. tBTC katmanında, dolandırıcılık likidasyon akışı başlatılır ve teminatlar TBTC satın almak için kullanılır.[tBTC Yatırma Tokeni](https://tbtc.network/developers/tbtc-technical-system-overview)ni elinde tutan kişi, yatırımın o anda dolaşımdaki TBTC’yi destekliyor olmaması halinde TBTC cinsinden tazmin edilir. Bu durumda, 1:1 arz sabitlemesini sürdürebilmek amacıyla TBTC yakılır.
2. Keep katmanında, imzalayıcının ilişiği kesilir ve sahip oldukları KEEP tokenleri yakılır ve kendisi de muhtemelen aday havuzundan çıkarılır. İlişiği kesilen imzalayıcılar sadece sermayelerini kaybetmekle kalmaz, aynı zamanda gelecekte para kazanma şansını da kaybederler.

**Güçlü bir fiyat beslemesi**

İmzalayıcılar, muhafaza ettikleri Bitcoin’in değerinin %150’sini kadar teminatı birlikte gösterirler, bu da yukarıda belirtildiği gibi dürüst davranmayı teşvik eder. Bu teminatlar Ethereum’un yerel varlığı olan ETH cinsindendir ve bu da bir Bitcoin fiyat beslemesi gerektirir. Dolayısıyla da fiyat beslemesinin güvenliği sistem açasından son derece önemlidir.

tBTC v1, ekosistem katılımcıları tarafından işletilen güvenilir ETH/BTC fiyat beslemesini kullanmaktadır. MakerDAO tarafından işletilen birincil besleme, Binance, HitBTC, Coinbase, Poloniex, Huobi ve Bitfinex’ten alınan fiyatların medyanıdır. Birincil besleme rapor vermeyi bırakırsa, sistem ikincil beslemeye geçer.

Fiyat beslemeleri imzalayıcılara zarar verebilen bir dizi saldırıya tehdidi altındadır -- ama sistem tasarımı sayesinde, yatırım yapanların zarar görmesi engellenir.Eski veya değiştirilmiş fiyatlar içeren bir besleme, yatırımları likidasyona itebilir ama likidasyonlar yüksekten başlayarak azalan fiyatlı müzayedeler olduğu için imzalayıcı teminatları çok küçük bir[kayma](https://en.wikipedia.org/wiki/Slippage_(finance))ile ve herhangi değiştirilmiş rapor edilen fiyatın üzerinden satılabilir. Kısa süreli fiyat beslemesi manipülasyonları yatırım yapanların fonlarını tehdit etmemektedir ama imzalayıcılar için bir risktir.

Birçok blok tarafından manipüle edilen hatalı bir besleme zaman içinde sistemi tehdit etmeye başlar. Bir besleme manipüle edilmiş gibi görünürse, rasyonel kullanıcılar yatırımlarını geri alır ve sistemden çıkarlar. Hatalı bir beslemenin kullanıcı geri alımlarını etkilemediğini belirtmekte fayda vardır.

Manipüle edilmiş bir besleme kötü niyetli bir imzalayıcının ilişiğinin kesilmesini engellemez, ama yanlış davranış durumunda yatırım sahibinin rücu hakkını azaltabilir. Bu bağlamda fiyat beslemesi, beslemenin daha zayıf bir güvenlik modeline düşüşünü engelleyen bir derinlemesine savunma önlemidir.

**Bitcoin işlem iletimi**

Bitcoin zincirinin durumunun Ethereum üzerinde ispatlanması, bir çeşit zincirler arası iletişim gerektirir. tBTC bunu başarmak için[Summa](https://docs.keep.network/tbtc/)tarafından geliştirilmiş[açık kaynaklı iletime](https://github.com/summa-tx/relays)dayalı[SPV ispatları](https://summa.one#spv)kullanır. İletim Bitcoin zincirinin durumunu izlerken, yine de tam bir düğüm çalıştırmanın sunduğu tam doğrulamaya kıyasla daha zayıf bir çeşit güvenlik olan “SPV varsayımları” kullanır.

SPV ispatları kullanılması TBTC’nin gerçek BTC’ye katı bir şekilde sabitlendiğinden emin olur -- “daha fazla BTC yazdırmak” imkansızdır. Benzer şekilde, bitcoin durumunun akıllı sözleşmenin kendisi tarafından doğrulanması nedeniyle bu ispatlar dürüst bir federasyona ihtiyaç duymaz.

**Yönetim**

tBTC’nin ilk sürümü, Bitcoin benzeri bir değişmezlik ve önceden talep edilen yönetim felsefesini takip ederek, sözleşmeleri yükseltmek için hiçbir olanak olmadan inşa edilmişti. tBTC’nin gelecekteki herhangi sürümleri yeni sistemler olacaktı ve tıpkı Bitcoin üzerinde bir çatallanmada olabileceği gibi “yükseltmek” için sosyal koordinasyon gerektirecekti.

Geliştirme ekibi lansman sırasında yine 4 ayrı özelliğe sahip bir imtiyazlı anahtarı kullanmıştır. Bu özellikler sadece yeni yatırımlar için geçerlidir ve ekibin mevcut yatırımlar veya uzun süre tutulan fonlara müdahalesini önler.

1. [İmzalayıcı ücretinin güncellenmesi](https://github.com/keep-network/tbtc/blob/19aa270197d84d64ef3a64bdcb09544abf6787b3/solidity/contracts/system/TBTCSystem.sol#L160). İmtiyazlı anahtar, imzalayıcıların yatırımların işleme alınması için aldıkları ücretleri değiştirebilir. Bu değişiklik yalnızca değişiklikten sonra açılan yeni yatırımları etkiler. Alınabilecek maksimum ücret %10 ve minimum ücret de 5bps (%0,05) olmaktadır, böylece bu özelliğin yanlışlıkla bir kill-switch’i açmasını önlenir.
2. [İlave lot boyutlarının desteklenmesi](https://github.com/keep-network/tbtc/blob/19aa270197d84d64ef3a64bdcb09544abf6787b3/solidity/contracts/system/TBTCSystem.sol#L160). İmtiyazlı anahtar, yeni yatırımlar için mevcut lot boyutlarını değiştirebilir ve bunlara yenilerini ekleyebilir. Bu değişiklik yalnızca değişiklikten sonra açılan yeni yatırımları etkiler. Mevcut lot boyutları her zaman en az 1 BTC’lik lot boyutunu içermelidir ve lot boyutları 10 BTC’den daha büyük veya 0,0005 BTC’den (50.000 sat) daha küçük olamaz, böylece yanlışlıkla kill-switch’i açmasını önler.
3. [Teminat gösterme eşiklerinin değiştirilmesi](https://github.com/keep-network/tbtc/blob/19aa270197d84d64ef3a64bdcb09544abf6787b3/solidity/contracts/system/TBTCSystem.sol#L195). İmtiyazlı anahtar, sistem tarafından uygulanan üç teminat eşiğini değiştirebilir. Bu değişiklik yalnızca değişiklikten sonra açılan yeni yatırımları etkiler ve mevcut yatırımların likidasyona zorlanması önlenir. En düşük eşik %100’dür ve en yüksek eşik %300’dür, bu da yanlışlıkla kill-switch’i açmasını önler.
4. [Yedek fiyat beslemesi eklenme](https://github.com/keep-network/tbtc/blob/master/solidity/contracts/system/TBTCSystem.sol#L404)*si*. İmtiyazlı anahtar, yeni fiyat beslemesi sözleşmesi adreslerini sorgulamalar beslemelerine ekleyebilir. Beslemelerin eklendikleri sıra ile sorgulanması ve bir hata olmaksızın rapor veren ilk beslemenin kullanılması nedeniyle, bu ayrıcalık sadece mevcut fiyat beslemesi başarısız olursa ve rapor vermeyi durdurursa rapor edilen fiyatı etkileyecek şekilde kullanılabilir. Bu değişiklik, fiyat beslemesi gizli anlaşması olmaksızın birinci fiyat beslemesini devre dışı bırakamaz ve sadece bir gecikmeden sonra geçerli olur.
5. [Yeni yatırımların durdurulma](https://github.com/keep-network/tbtc/blob/19aa270197d84d64ef3a64bdcb09544abf6787b3/solidity/contracts/system/TBTCSystem.sol#L129)*sı*. Ayrıcalıklı anahtar, bir defaya mahsus ve gecikme olmaksızın yeni yatırımları 10 gün boyunca durdurabilir. Bu özellik bir kez kullanıldıktan sonra bir daha kullanılamaz. Bu yaklaşım, bir kill-switch veya diğer bir kontrol mekanizması kullanılmasına tercih edilmiştir, 0-gün keşfi durumunda geliştiricilere kullanıcıları bilgilendirme şansını vererek kullanıcıların felaket düzeyindeki bir arıza halinde yatırımlarını sabitlemeden çekmelerine imkan tanır. Diğer tüm imtiyazlı anahtar özelliklerinde olduğu gibi bu da açık yatırımları etkilemez ve bunlar takas edilmeye veya normal şekilde kullanılmaya devam edebilir.

Sansür direnci olduğu iddiasında olan her projede olduğu gibi tBTC yönetimi de kötü niyetli geliştiriciler veya çalıntı anahtarlar karşısında sınırlayıcı ve dirençli olmak üzere tasarlanmış olsa da geliştirme ekibinin devam eden görevi ve kod bütünü kullanıcılar ve harici kuruluşların dikkatli tetkiklerini hak etmektedir.

**Diğer saldırılar**

tBTC yan zinciri mekanizmasına karşı gerçekleştirilebilecek bilinen en güçlü saldırı üç rolün gizli anlaşmasını gerektirir -- fiyat beslemesi koruyucusu, büyük sayıda imzalayıcı ve yeni yatırımcılar.

* Öncelikle, besleme koruyucusu ETH’nin rapor edilen fiyatını BTC’ye göre örneğin %100 fazla değerli olacak şekilde değiştirir. Bu manipülasyonun zaman içerisinde korunması gerekir.
* Yeni yatırımcılar artık dolandırıcılık olması halinde BTC rücu hakkının sadece %75 olduğunu görürler ve sistemden kaçınırlar. Bununla birlikte gizli anlaşma yapan yatırımcılar BTC yatırmaya devam ederler.
* Dürüst imzalayıcılar, teminat rücu hakkına bakmaksızın BTC’leri muhafaza etmeye devam ederler. İmzalama kümesinde çok sayıda kötü niyetli imzalayıcı varsa, bu gizli anlaşma yapmak ve düşük teminatlı yatırımlarda BTC’yi alıp kaçmak için bir fırsattır. Bu imzalayıcılar tasfiye edilir, çaldıkları her 1 BTC için 1 BTC’nin %75’ini kaybeder ve gelecekteki imzalama çalışmalarına katılamayacak şekilde ağdan atılırlar.
* Sistemden kaldırılan her 1 BTC için ya 1 BTC’nin %75’i ETH cinsinden müzayedeye çıkarılır ya da aynı şekilde müzayedeye hazır kalır; müzayedesi alınmamış her yatırım, TBTC değeri müzayedeye çıkarılan teminata eşitlenene kadar arz sabitini kırar.

Bu saldırı zordur, önemli boyutlarda sermaye ve koordinasyon gerektirir. Bu saldırı olasılığını azaltan en güçlü araç, stake eden aday havuzunda büyük oranlarda kötü niyetli imzalayıcı olması veya saldırganın aşırı şanslı olmasını gerektiren[Keep’in random beacon](https://blog.keep.network/whats-in-a-beacon-12c34b0bc078)’ıdır.

**Alternatif güvenlik modelleri (BTCB, RenBTC)**

Sabitlenmiş Bitcoin için her biri farklı güvenlik seviyelerine sahip olan bir alternatif model bulunmaktadır.[Binance’ın BTCB](https://www.binance.com/en/blog/347360878904684544/Introducing-BitcoinPegged-Token-on-Binance-Chain)’si gibi merkezi Bitcoin bankaları basit bir çözüm sunmaktadır -BTC’nin sabitlenmesini onlar yönetir, ama onlara bunu yapmaları için güvenmeniz gerekir. Liquid ve[Wrapped Bitcoin](https://www.wbtc.network/)gibi şirketlerin izinli federasyonları ise farklı paydaşlara sahip aynı modeldir.

Buna karşılık açık federasyonlar Bitcoin’in merkeziyetsiz doğasına daha uygundur; bu amaçla, bazı projeler farklı güvenlik özelliklerini diğerlerine tercih etmişlerdir.

[Ren](https://medium.com/renproject/welcome-to-the-renvm-developer-center-c1ade842fe07), özel bir mutabakat katmanı üzerinde sabitlenmiş BTC kullanan açık bir federasyona örnektir. Ren’in modeli Keep ile benzerliklere sahiptir - Ren üzerindeki onaylayıcılar protokole katılabilmek için yerel çalışma tokeni REN’i stake ederler. Bununla birlikte, Ren onaylayıcıların bitcoin muhafaza edebilmeleri için sadece sabit bir miktar REN’i stake etmelerini gerektirir ve bu da yatırım yapanlara dolandırıcılık halinde hiçbir rücu hakkı vermez. Buna karşılık, tBTC imzalayıcıların her zaman hem ETH hem de KEEP cinsinden fazlasıyla teminat göstermelerini gerektirir. Ren aynı zamanda onaylayıcı kümesinde 2/3 güvenlik eşiğini yeterli görerek daha az sayıda federasyon kullanır. tBTC ise her yatırım için farklı bir imzalayıcı grubu olması gerekliliğini getirmiştir ve tüm imzalayıcıların işlemleri yetkilendirmeleri gerekir. Bir diğer büyük fark ise tBTC’nin SPV ispatları kullanması, tBTC’nin Bitcoin üzerindeki “en ağır zinciri” izlemesini gerektirmesi ve imzalayıcıların kullanıcı yatırımlarını sansürlemesini veya çatallar seçmelerini engellemesidir. Ren’in federasyonu bu garantileri vermemektedir. Son olarak, Ren’in güvenlik modeli ekstra özgün mutabakat ve MPC protokolleri gerektirmektedir ve çok daha büyük bir saldırı alanını gözler önüne sermektedir.

**Sonuç**

Piyasada bir dizi bitcoin sabiti bulunmaktadır ve her geçen gün bunlara yenileri eklenmektedir. tBTC, Ethereum ile son derece uyumlu olması, minimum güven gerekliliğine sahip olması ve güvenli olması ile ön plana çıkmaktadır.

Yakında gelecek tBTC iyileştirmeleri arasında[güvenilir fiyat beslemesinin değiştirilmesi](https://github.com/keep-network/tbtc/issues/254)ve[ETH teminat gerekliliklerinin azaltılması](https://github.com/keep-network/tbtc/issues?q=is:issue+is:open+collateral) yer almaktadır.

tBTC’yi yaratanlar arasında[Keep](https://keep.network),[Summa](https://summa.one)ve[Cross Chain Group](https://crosschain.group)yer almaktadır ve[GitHub](https://github.com/keep-network/tbtc)üzerinde tamamen açık kaynaklıdır.

Sorularınız olması veya güvenlik modeli hakkında daha fazlasını öğrenmek için[\#tbtc Discord kanalına](https://chat.tbtc.network)katılın.

<!--EndFragment-->
