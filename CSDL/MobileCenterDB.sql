USE [master]
GO

WHILE EXISTS(select NULL from sys.databases where name='MobileCenter')
BEGIN
    DECLARE @SQL varchar(max)
    SELECT @SQL = COALESCE(@SQL,'') + 'Kill ' + Convert(varchar, SPId) + ';'
    FROM MASTER..SysProcesses
    WHERE DBId = DB_ID(N'MobileCenter') AND SPId <> @@SPId
    EXEC(@SQL)
    DROP DATABASE [MobileCenter]
END

CREATE DATABASE [MobileCenter]
GO

USE [MobileCenter]
GO


GO
/****** Object:  Table [dbo].[__MigrationHistory]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[__MigrationHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ContextKey] [nvarchar](300) NOT NULL,
	[Model] [varbinary](max) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_dbo.__MigrationHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC,
	[ContextKey] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[ChiTietDonHang]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChiTietDonHang](
	[IdChiTietDonHang] [int] IDENTITY(1,1) NOT NULL,
	[IdSanPham] [int] NOT NULL,
	[IdDonHang] [int] NOT NULL,
	[SoLuongSanPham] [int] NOT NULL,
 CONSTRAINT [PK_dbo.ChiTietDonHang] PRIMARY KEY CLUSTERED 
(
	[IdChiTietDonHang] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[DanhMucSanPham]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DanhMucSanPham](
	[IdDanhMucSanPham] [int] IDENTITY(1,1) NOT NULL,
	[TenDanhMucSanPham] [nvarchar](max) NULL,
 CONSTRAINT [PK_dbo.DanhMucSanPham] PRIMARY KEY CLUSTERED 
(
	[IdDanhMucSanPham] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[DonHang]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DonHang](
	[IdDonHang] [int] IDENTITY(1,1) NOT NULL,
	[IdNguoiDung] [int] NOT NULL,
	[IdTinhTrangDonHang] [int] NOT NULL,
	[NgayTaoDonHang] [datetime] NOT NULL,
	[NgayXuLyDonHang] [datetime] NOT NULL,
	[TrackingNumber] [nvarchar](max) NULL,
	[MaGiaoDich] [nvarchar](max) NULL,
 CONSTRAINT [PK_dbo.DonHang] PRIMARY KEY CLUSTERED 
(
	[IdDonHang] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[GioHang]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GioHang](
	[IdGioHang] [int] IDENTITY(1,1) NOT NULL,
	[IdSanPham] [int] NOT NULL,
	[CartGuid] [nvarchar](max) NULL,
	[SoLuong] [int] NOT NULL,
	[NgayTaoGioHang] [smalldatetime] NOT NULL,
 CONSTRAINT [PK_dbo.GioHang] PRIMARY KEY CLUSTERED 
(
	[IdGioHang] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO

/****** Object:  Table [dbo].[HinhSanPham]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[HinhSanPham](
	[IdHinhSanPham] [int] IDENTITY(1,1) NOT NULL,
	[LinkSanPham] [varbinary](max) NULL,
 CONSTRAINT [PK_dbo.HinhSanPham] PRIMARY KEY CLUSTERED 
(
	[IdHinhSanPham] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[KieuNguoiDung]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[KieuNguoiDung](
	[IdKieuNguoiDung] [int] IDENTITY(1,1) NOT NULL,
	[TenKieuNguoiDung] [nvarchar](max) NULL,
 CONSTRAINT [PK_dbo.KieuNguoiDung] PRIMARY KEY CLUSTERED 
(
	[IdKieuNguoiDung] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[NguoiDung]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[NguoiDung](
	[IdNguoiDung] [int] IDENTITY(1,1) NOT NULL,
	[IdKieuNguoiDung] [int] NOT NULL,
	[HoTen] [nvarchar](max) NULL,
	[TenDangNhap] [nvarchar](max) NULL,
	[DiaChi] [nvarchar](max) NULL,
	[MatKhau] [nvarchar](max) NULL,
	[SoDienThoai] [nvarchar](max) NULL,
	[Email] [nvarchar](max) NULL,
 CONSTRAINT [PK_dbo.NguoiDung] PRIMARY KEY CLUSTERED 
(
	[IdNguoiDung] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[SanPham]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SanPham](
	[IdSanPham] [int] IDENTITY(1,1) NOT NULL,
	[IdDanhMucSanPham] [int] NOT NULL,
	[IdHinhSanPham] [int] NOT NULL,
	[TenSanPham] [nvarchar](max) NULL,
	[MoTaSanPham] [nvarchar](max) NULL,
	[GiaSanPham] [int] NOT NULL,
	[SoLuong] [int] NULL,
 CONSTRAINT [PK_dbo.SanPham] PRIMARY KEY CLUSTERED 
(
	[IdSanPham] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ThamSo]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ThamSo](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[SoLuongTruyCap] [int] NULL,
 CONSTRAINT [PK_dbo.ThamSo] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TinhTrangDonHang]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TinhTrangDonHang](
	[IdTinhTrangDonHang] [int] IDENTITY(1,1) NOT NULL,
	[TenTinhTrangDonHang] [nvarchar](max) NULL,
 CONSTRAINT [PK_dbo.TinhTrangDonHang] PRIMARY KEY CLUSTERED 
(
	[IdTinhTrangDonHang] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[__MigrationHistory] ([MigrationId], [ContextKey], [Model], [ProductVersion]) VALUES (N'202005171448075_AddRelationshipDTO', N'MobileCenter.Migrations.Configuration', 0x1F8B0800000000000400DD5DDB6EDB48127D5F60FF81D0D3EEC263D9CECB8E21CF2023E56224B6834819CC5BD096DA1211B2A9259B8185C57ED93ECC27ED2F6C53A2C8BEDF789383BCC4ECE6A962F5A9627775B3F4BFFFFE39F9F5398E82EF30CDC204DD8C2ECF2F460144CB6415A2F5CD28C74F3FFD73F4EB2F7FFDCBE4CD2A7E0E7E3FF67B55F42377A2EC66B4C1787B3D1E67CB0D8C41761E87CB34C992277CBE4CE2315825E3AB8B8B9FC7979763482046042B08269F7384C318EEFF207F4E13B4845B9C83E82E59C1282BAF9396F91E35B80731CCB660096F4677C96318C1294418A6E787EEA3E0751402A2CA1C464FA3002094608089A2D75F3238C76982D6F32DB900A2C56E0B49BF271065B07C80EBBABBEDB35C5C15CF32AE6F3C422DF30C27B123E0E5ABD23863FE762F138F2AE311F3BD2166C6BBE2A9F726BC194D37E122847896A0F700AD678B8751C04BBD9E46697187D4D4E7E4967301E42CA0BB9E553C21742AFE9D05D33CC2790A6F10CC710AA2B3E053FE1885CB0F70B748BE417483F228A21527AA9336E602B9F4294DB630C5BBCFF0A97C9CDB15ABCB2818B328631EA60251221C9EFD16E15757A3E09E28061E23587186B2D31C27297C07114C0186AB4F009367470522DC5B5DD045903C07E8D306C4269126184BCDF530F3E4635EF889974AF7E07BB8DE1B8543AD54FB0CA37D7BB609B7073F3DAFE9F3951F82B769127F4EA21A40ECF47501D235C444D1C4D4739EE4E992537A32AE5D43EB30CD3CE5245CA4816F0CE014F7EB3C096779533EDFAE1621DA2CD2C2FA6DF8C7FD1AEC1620E1B066E42117E445E605F747FE71D7161E79D0E537F2CEBECFE347981EE1C8BB2F2CC0EFC0F34788D67843980A9E897F85CF7075BC52E27F412179ED939B709A3B7838EFBAED3BFAD17DCD8E7E0C09B6BA535493A85DB51692241ACBDA85A824ED240B483A3D45264BD4E53B29B4D6741394D7F56D145469ABF88455FAFE01032BC51FF7D06A1DE7DA0CAE1F4298B71460DF270B88DA0F343CF5219A11BADD6FC0B67359B3109080D2B9983B803F6C40DEB99C79320B215A6C12D0FD33BD894118F5F8D6D10542AFB8CDBF64B4C1DD564BCEDB24BA323D0A5154F75A63752F21646BBA368AD83CAE4FD4E631068CDCDCC8B8476FA740DA5E0427E1502AB90797EB98C8BC035A70DE8BC892398D0F97253003D2599C20BA33DA75B9D42AA955C2077E95B430A7E6796D33FFF64B5400B4B9CB976502C7375FC1830C99B66074F1CA5E70083D125A2EBA073A57122574AE87F52BAF5F4D66652761AEA1EED968AAD18CC12741DD069CED9DACAE6E62427B4F025C2B50C48B3A731F7E49962C405FB2DE85BCA8A649768B141CE5AAEA149CB293F01253F7745D22F1DC6B3F6A697457C4375BDDDF8589D2E0655B2145A2ADD82A04574917D7B421E389121DA976859EF21E82AE8A6E8DDE02F5F3FBBC05EABB077C0B54FC707F0B54B7BEB0CDC82948F1BB3C8C563D64B7F6FB95AD6CEA70D6B6DF84F19A853987063E8269A28797ABB1EEEBE36E2CC2802EC7843C77B77398BBB4E77A1F43F48D13FA5B8840BAB3F39A3628E9FD26E0A9697861F8656C08C23CF14AD2ECEF1C8C8E65885AA4F96E5A6C5FB8F291BFBF1B42AAC6E1759625CB700F281C85E02791EC63BC41ABC07A53F7F09660B78909F1C990845B320844B19BD1E58837F6039AC1086218BC5E1ECE594D41B6042BD11DC8C3ADDCB5AB2638B576928353AC92FF10641326C0B4303988A6C4DD08B7428445DA8468196E41646B320EC0EDCC4761914A22DF32835B880A8ED8DAA7B12A95446ED04C969B8C2976EA492BDD0D523142BF35549381DD09E985ACFAD306365ED412417536B2238472E3C5899D3A83B4A0470FD4D4EC99A85860B381527341DCB4EB85AA36DB9576BED41265CD56B3238C76D7D089BC6613B5A4510F34D66D92A82862B563527344BA69D70B97AD8E4BF5187D2D0C67C71CD396A1139D2DACD49E563D505A9D2E55F1C422775AB3845E6CF7C26273BE768099AED1647694512CF79DF86BB44F6355FA252D9727B7A0852A696E435A910F362264D153DCC2EED03D9A9256FE3C966B22EDDEB62F77E583D896463D5058921A55114B9727AD1945EF22D89356B73DD37B14F7A2A9FA09FA0BAAEA117A09D15491125551C6941FAD69C367DB7B99009836F2FCC2BC1735F596B2A38626CDEF4451BD595AD1A575AA1EB2B5E41E4CEE8069A9C7EA914E7217ADF0194B72E65F3258A6CDB3729F8DA74C813E875871B6A0CE15AB678B425C6521D5580E20D4A2578061330A06206E052D8089391403A0B8841130A5CB5993D5B8F7B3683C71F2648054633980547BA70208FDEE3580303E2400F111D33400E57E9168F6B281BB9FF23381A4B20333547FE3076E7C3870D91AA99E8B721921BEB8EC665080A6AFA6599B58D84BFED185682A733ADE3E214F3D8F2E07669943379BDBC32CBA63F1A2716C13C2AE2961EAD14C0943A72CAECD0078184D7BEA5AB49A75FED13903493D9F4562CA2D69D809DD34C7FC44BB5926B91CD35CD473A967452E99A92EA396E668A1D65EBAFC8A6386C5DF5E8A7C0A4D2CC3097A677BC98E2E898632ADE26DD7F1D493288ED2D9AEDACD46F63086EAD08C68109BB5A4CB6A927A1CFDEAC37A01D8C840C71324D59AA46A9B8C0FF57BCA0B93B1A2D0CFE40E6CB7215A53857FCA2BC1FC50F567FAD3DCBD1A4E7CC0182F3349519C4ADB4A124E52B0865C2B114D347D1BA6199E010C1E4171D666BA8A856EF2159862AA7A94295D6489A3789CC81E6F2BFE7F3CB92E1E7D129764E24AB6447A4B9E382ED6C3FB2343CA502BC5088AEA4C2002A9B1A2CE3489F218D955ECD12357E46421951EA0C352A8E7A1175F3B8706E4DB44D4C9981B0C218720104048FCB0B4B2225D5B6C6B44333F7EB53772CC2110164D334BD6E189134516D63C9154A3F335686864BECD0D952945C3C3328DF6B87C491A1A966F3B19AFD0ADB8DCFC82491AB97B86FEF6FEF8CC2D18594CC36A528D5B160FA1D1CA4B0EFCA24B8330E4A21BECF18EE53F68A8E3357B94AABA070D535D7479A750D53BD8170AD5608F5756E8A091CA4B27E37B2C9B9AFA9F90B875F7413344DF7E23D67FE0886F441E686C85D75ED3E195E5D0DD47D80A659897BDB42A0237DA36F8434D2F4D2912C759A6B0BBE131D9346368E69C5C2E859B7A1A4E4F688759072D693E99216E6B6C1B0DAADF68B6BA8EEC8819DCD6320BABCDFB68D9A6A299071AF3D93C33DFA11BECF1E84FE36938FAFAC9B0FF98926CCA7E6A9BD49DFDBA9BD5BCAAB2A92CA79449561D567B9E447D3B4C6351979D3332D2548CC78A5B6A30BEED649849C786A6ECE4F6DEDD196A02E833FA315FDAD2884CC3C98C63795EA1F14C590A63333956DC6870BAEA7B5589EF29BE85EDDCC8C21605DFA5925E6D55705B1293727BC0FC0305C27EC1A1CB2820E6FA1EAE8ABD82F92EC3303E2F3A9CCFFF154D23B2A2C775873B80C22798E1C3E7C7A3AB8BCB2BEE270E4EE7E706C659B68A24DB2BDADF1C60076EE04AFF61617AE327D3CE7590B84FFAF75284E378B768059F6F46FFDEDF751DDCFEF1B5BAF12C78480917AE838BE03FCD7F14C05E7C796323F1F21F13D8EBA045F2A9CAEFC5A50624EA873D42854FFB01AC6E6DC820554D467B4D7884460AC90BF0AF88C1718B05F8BDF1E405F8D177902E3720FD5B0C9EFF4E638A256EFC8AA77BB1BFDDBAE51D7980B4CEAD3DF798DB1B118F2974EE30A0128E88C5CC1BE1B105CB1B417145C91B61490A8F37C2638A8B77E151FA3CFFB035A53BF12E5519E92E8C6B4CB19F4291E3AEACAC92D785A10DE9EDA1CBEE766562B9B42E0CDCD4B20D4CDA872DB50367B77460EE6F38FD94D462B3D784BAB9911A620DDA666F59B1CE6C233CB1966C8B6B2C556EB9FFF2973FE20A5DA894D970CAC554C334B340B9BEE24C6FB91EF2AD35E945ACF68B3C764230495D4732C48FFBD28EAD4EB02469DA210B14B660CC7E6A120E5B7D50F2E1ECA0E5067B2C2C687340FD07AA243874E94067C6775029B0D7D280CEC41ABA845A0B95004FA1F09F17E93BAAF1D77B49BF2E84BF9CEA7D2752AE6FA85067771AB5F33A7C9D483FF17A7BC356D63B8D599CF6844E57F59D7C6771C3D675B2FC8A9B8E29626195C16AD6357080B6160C1607B17BAB78F783D6B63B95E04657F0F12CAAF772C299F61CEEE9C5B146F5E9862F483754F8329E67EDB2DC5CDB827BAA2D271640E0475557336E3F96753A4F3D333A1C932C0A2924841387DCA0E1CC1F2F592BD224CB5608BB9815C4B0CD3241EA4302BC28711D2F8813BBC844EACF26F062A5EB3741B2B4974CB871E35E1846714E258EA6D8473AA8FADD6C5EB256A44996AD10FAFD2908A11B654254BB6ABC103EAA0B82F80E3261BA9D1681341B43D93D2935362759924F569E6B26961E34AD0429107399CC93ACB927AFF1663285B3215F46653D75213D9341BC4CFA822AE7694BE59D025BD409A6D60BE3C98A699D5EECE8BCF29DF21DAEF8145B671E67E39E4669BB669C106709FC179FCD1FBAB71276AA9A757D8EBC43993AF15B2FB2A8CA517110E6F0D70C66E1BA8698104C0497CC72AAEA738B9E92E3E28ED3E8D8853F2606315891B5D6EB14874F608949F31266D9FE87747F07510E8B33D18F70758B1E72BCCD317964183F46CC0F3B16AB439DFC7D2D3E56E7C9C376FFBBA06D3C0251332CCE0E3DA0DF0E879C4ABDDF4A0E7B28208A65677982A4184B5C9C2459EF2AA4FB04590295E6AB56CB0B186F2302963DA039F80E7D74FB92C18F700D96BBE3277B6A10F340B0669FCC42B04E419C9518F5FDE44FC2E155FCFCCBFF017BF4C4A2B9990000, N'6.4.4')
SET IDENTITY_INSERT [dbo].[DanhMucSanPham] ON 

INSERT [dbo].[DanhMucSanPham] ([IdDanhMucSanPham], [TenDanhMucSanPham]) VALUES (1, N'LAPTOP')
INSERT [dbo].[DanhMucSanPham] ([IdDanhMucSanPham], [TenDanhMucSanPham]) VALUES (2, N'TIVI')
SET IDENTITY_INSERT [dbo].[DanhMucSanPham] OFF

SET IDENTITY_INSERT [dbo].[KieuNguoiDung] ON 

INSERT [dbo].[KieuNguoiDung] ([IdKieuNguoiDung], [TenKieuNguoiDung]) VALUES (1, N'Customer')
INSERT [dbo].[KieuNguoiDung] ([IdKieuNguoiDung], [TenKieuNguoiDung]) VALUES (2, N'Admin')
SET IDENTITY_INSERT [dbo].[KieuNguoiDung] OFF

ALTER TABLE [dbo].[ChiTietDonHang]  WITH CHECK ADD  CONSTRAINT [FK_dbo.ChiTietDonHang_dbo.DonHang_IdDonHang] FOREIGN KEY([IdDonHang])
REFERENCES [dbo].[DonHang] ([IdDonHang])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ChiTietDonHang] CHECK CONSTRAINT [FK_dbo.ChiTietDonHang_dbo.DonHang_IdDonHang]
GO
ALTER TABLE [dbo].[ChiTietDonHang]  WITH CHECK ADD  CONSTRAINT [FK_dbo.ChiTietDonHang_dbo.SanPham_IdSanPham] FOREIGN KEY([IdSanPham])
REFERENCES [dbo].[SanPham] ([IdSanPham])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ChiTietDonHang] CHECK CONSTRAINT [FK_dbo.ChiTietDonHang_dbo.SanPham_IdSanPham]
GO
ALTER TABLE [dbo].[DonHang]  WITH CHECK ADD  CONSTRAINT [FK_dbo.DonHang_dbo.NguoiDung_IdNguoiDung] FOREIGN KEY([IdNguoiDung])
REFERENCES [dbo].[NguoiDung] ([IdNguoiDung])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[DonHang] CHECK CONSTRAINT [FK_dbo.DonHang_dbo.NguoiDung_IdNguoiDung]
GO
ALTER TABLE [dbo].[DonHang]  WITH CHECK ADD  CONSTRAINT [FK_dbo.DonHang_dbo.TinhTrangDonHang_IdTinhTrangDonHang] FOREIGN KEY([IdTinhTrangDonHang])
REFERENCES [dbo].[TinhTrangDonHang] ([IdTinhTrangDonHang])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[DonHang] CHECK CONSTRAINT [FK_dbo.DonHang_dbo.TinhTrangDonHang_IdTinhTrangDonHang]
GO

ALTER TABLE [dbo].[GioHang] ADD  CONSTRAINT [DF_GioHang_NgayTaoGioHang]  DEFAULT (getdate()) FOR [NgayTaoGioHang]
GO

ALTER TABLE [dbo].[GioHang]  WITH CHECK ADD  CONSTRAINT [FK_dbo.GioHang_dbo.SanPham_IdSanPham] FOREIGN KEY([IdSanPham])
REFERENCES [dbo].[SanPham] ([IdSanPham])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[GioHang] CHECK CONSTRAINT [FK_dbo.GioHang_dbo.SanPham_IdSanPham]
GO
ALTER TABLE [dbo].[NguoiDung]  WITH CHECK ADD  CONSTRAINT [FK_dbo.NguoiDung_dbo.KieuNguoiDung_IdKieuNguoiDung] FOREIGN KEY([IdKieuNguoiDung])
REFERENCES [dbo].[KieuNguoiDung] ([IdKieuNguoiDung])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[NguoiDung] CHECK CONSTRAINT [FK_dbo.NguoiDung_dbo.KieuNguoiDung_IdKieuNguoiDung]
GO
ALTER TABLE [dbo].[SanPham]  WITH CHECK ADD  CONSTRAINT [FK_dbo.SanPham_dbo.DanhMucSanPham_IdDanhMucSanPham] FOREIGN KEY([IdDanhMucSanPham])
REFERENCES [dbo].[DanhMucSanPham] ([IdDanhMucSanPham])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[SanPham] CHECK CONSTRAINT [FK_dbo.SanPham_dbo.DanhMucSanPham_IdDanhMucSanPham]
GO
ALTER TABLE [dbo].[SanPham]  WITH CHECK ADD  CONSTRAINT [FK_dbo.SanPham_dbo.HinhSanPham_IdHinhSanPham] FOREIGN KEY([IdHinhSanPham])
REFERENCES [dbo].[HinhSanPham] ([IdHinhSanPham])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[SanPham] CHECK CONSTRAINT [FK_dbo.SanPham_dbo.HinhSanPham_IdHinhSanPham]
GO


/****** Object:  StoredProcedure [dbo].[ChiTietDonHang_Insert]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create PROCEDURE [dbo].[ChiTietDonHang_Insert]
@IdDonHang int,
@IdSanPham int,
@SoLuongSanPham int
AS
INSERT INTO ChiTietDonHang (
IdDonHang,
IdSanPham,
SoLuongSanPham)
VALUES (
@IdDonHang,
@IdSanPham,
@SoLuongSanPham)

GO
/****** Object:  StoredProcedure [dbo].[ChiTietDonHang_Select]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create PROCEDURE [dbo].[ChiTietDonHang_Select]
@IdDonHang int
AS
SELECT
SoLuongSanPham,
TenSanPham,
GiaSanPham
FROM
ChiTietDonHang INNER JOIN
SanPham
ON
SanPham.IdSanPham = ChiTietDonHang.IdSanPham
WHERE
IdDonHang = @IdDonHang

GO
/****** Object:  StoredProcedure [dbo].[DangNhapAdmin_Select]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create PROCEDURE [dbo].[DangNhapAdmin_Select]
@TenDangNhap nvarchar(50),
@MatKhau nvarchar(50)
AS
SELECT
IdNguoiDung,
IdKieuNguoiDung,
HoTen,
TenDangNhap,
DiaChi,
MatKhau,
SoDienThoai,
Email
FROM
NguoiDung
WHERE
TenDangNhap = @TenDangNhap AND
MatKhau = @MatKhau AND
IdKieuNguoiDung = 2

GO
/****** Object:  StoredProcedure [dbo].[DangNhapNguoiDung_Select]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[DangNhapNguoiDung_Select]
@TenDangNhap nvarchar(50),
@MatKhau nvarchar(50)
AS
SELECT HoTen,IdNguoiDung
FROM NguoiDung
WHERE
TenDangNhap = @TenDangNhap AND MatKhau = @MatKhau AND IdKieuNguoiDung = 1

GO
/****** Object:  StoredProcedure [dbo].[DanhMucSanPham_Select]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[DanhMucSanPham_Select]
AS
SELECT IdDanhMucSanPham, TenDanhMucSanPham
FROM DanhMucSanPham

GO
/****** Object:  StoredProcedure [dbo].[DanhMucSanPhamMaster_Select]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create PROCEDURE [dbo].[DanhMucSanPhamMaster_Select] 
	
AS
	select DanhMucSanPham.IdDanhMucSanPham,count(SanPham.IdDanhMucSanPham)  as SoSanPham,TenDanhMucSanPham 
	from SanPham join DanhMucSanPham on SanPham.IdDanhMucSanPham=DanhMucSanPham.IdDanhMucSanPham
	where SanPham.IdDanhMucSanPham=DanhMucSanPham.IdDanhMucSanPham
	group by DanhMucSanPham.IdDanhMucSanPham,TenDanhMucSanPham


GO
/****** Object:  StoredProcedure [dbo].[DonHang_Insert]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create PROCEDURE [dbo].[DonHang_Insert]
@IdNguoiDung int,
@MaGiaoDich nvarchar(50)
AS
INSERT INTO DonHang (
IdNguoiDung,
MaGiaoDich)
VALUES (
@IdNguoiDung,
@MaGiaoDich)

GO
/****** Object:  StoredProcedure [dbo].[DonHang_Select]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create PROCEDURE [dbo].[DonHang_Select]
@IdNguoiDung int
AS
SELECT
IdDonHang,
MaGiaoDich,
NgayTaoDonHang,
TenTinhTrangDonHang,
NgayXuLyDonHang,
TrackingNumber
FROM
DonHang INNER JOIN
TinhTrangDonHang
ON
TinhTrangDonHang.IdTinhTrangDonHang = DonHang.IdTinhTrangDonHang
WHERE
IdNguoiDung = @IdNguoiDung
ORDER BY
NgayTaoDonHang DESC

GO
/****** Object:  StoredProcedure [dbo].[DonHang_Update]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[DonHang_Update]
@IdDonHang int,
@IdTinhTrangDonHang int,
@NgayXuLyDonHang datetime,
@TrackingNumber nvarchar(50)
AS
UPDATE
DonHang
SET
IdTinhTrangDonHang = @IdTinhTrangDonHang,
NgayXuLyDonHang = @NgayXuLyDonHang,
TrackingNumber = @TrackingNumber
WHERE
IdDonHang = @IdDonHang


GO
/****** Object:  StoredProcedure [dbo].[DonHangAll_Select]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create PROCEDURE [dbo].[DonHangAll_Select]
AS
SELECT
IdDonHang,
MaGiaoDich,
NgayTaoDonHang,
TenTinhTrangDonHang,
HoTen,
TenDangNhap,
Diachi,
SoDienThoai,
Email
FROM
DonHang INNER JOIN
TinhTrangDonHang
ON
TinhTrangDonHang.IdTinhTrangDonHang = DonHang.IdTinhTrangDonHang
INNER JOIN
NguoiDung
ON
NguoiDung.IdNguoiDung = DonHang.IdNguoiDung
ORDER BY
NgayTaoDonHang DESC

GO
/****** Object:  StoredProcedure [dbo].[DonHangByID_Select]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create PROCEDURE [dbo].[DonHangByID_Select]
@IdDonHang int
AS
SELECT
NgayTaoDonHang,
NgayXuLyDonHang,
IdTinhTrangDonHang,
TrackingNumber
FROM
DonHang
WHERE
IdDonHang = @IdDonHang


GO
/****** Object:  StoredProcedure [dbo].[GioHang_Delete]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[GioHang_Delete]
@IdGioHang int
AS
DELETE FROM
GioHang
WHERE
IdGioHang = @IdGioHang

GO
/****** Object:  StoredProcedure [dbo].[GioHang_Insert]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create PROCEDURE [dbo].[GioHang_Insert]
@CartGuid nvarchar(50),
@IdSanPham int,
@SoLuong int
AS
DECLARE @ItemCount int
SELECT @ItemCount = Count(IdSanPham) FROM GioHang
WHERE IdSanPham = @IdSanPham AND CartGuid = @CartGuid
IF @ItemCount > 0 /*cap nhat so luong*/
UPDATE GioHang SET SoLuong = (@SoLuong + GioHang.SoLuong)
WHERE IdSanPham = @IdSanPham AND CartGuid = @CartGuid
ELSE /*chen khi chua co san pham */
INSERT INTO GioHang ( CartGuid,IdSanPham,SoLuong)
VALUES (@CartGuid,@IdSanPham,@SoLuong)


GO
/****** Object:  StoredProcedure [dbo].[GioHang_Select]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create PROCEDURE [dbo].[GioHang_Select]
@CartGuid nvarchar(50)
AS
SELECT
IdGioHang,
SanPham.IdSanPham,
SanPham.TenSanPham,
GioHang.SoLuong,
SanPham.GiaSanPham as GiaSanPham,
(SanPham.GiaSanPham * GioHang.SoLuong) AS ThanhTien
FROM
GioHang INNER JOIN
SanPham
ON
SanPham.IdSanPham = GioHang.IdSanPham
WHERE
CartGuid = @CartGuid


GO
/****** Object:  StoredProcedure [dbo].[GioHang_Update]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create PROCEDURE [dbo].[GioHang_Update]
@SoLuong int,
@IdGioHang int
AS
UPDATE
GioHang
SET
SoLuong = @SoLuong
WHERE
IdGioHang = @IdGioHang

GO
/****** Object:  StoredProcedure [dbo].[HinhSanPham_Select]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[HinhSanPham_Select]
@IdHinhSanPham int
AS
SELECT LinkSanPham
FROM HinhSanPham
WHERE IdHinhSanPham = @IdHinhSanPham


GO
/****** Object:  StoredProcedure [dbo].[NguoiDung_Insert]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[NguoiDung_Insert]
@HoTen nvarchar(50),
@TenDangNhap nvarchar(50),
@DiaChi nvarchar(50),
@SoDienThoai nvarchar(50),
@Email nvarchar(50),
@IdKieuNguoiDung int,
@MatKhau nvarchar(50)
AS
INSERT INTO NguoiDung (
HoTen,TenDangNhap,DiaChi,SoDienThoai,Email,IDKieuNguoiDung,MatKhau)
VALUES (@HoTen,@TenDangNhap,@DiaChi,@SoDienThoai,@Email,@IdKieuNguoiDung,@MatKhau)


GO
/****** Object:  StoredProcedure [dbo].[NguoiTruyCap_Select]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[NguoiTruyCap_Select]
AS
SELECT * FROM ThamSo

GO
/****** Object:  StoredProcedure [dbo].[NguoiTruyCap_Update]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[NguoiTruyCap_Update]
AS
UPDATE ThamSo SET SoLuongTruyCap=SoLuongTruyCap+1

GO
/****** Object:  StoredProcedure [dbo].[SanPham_Insert]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[SanPham_Insert]
@IdDanhMucSanPham int,
@TenSanPham nvarchar(MAX),
@LinkSanPham varbinary(MAX),
@MoTaSanPham nvarchar(max),
@GiaSanPham int
AS
DECLARE @IdHinhSanPham int
INSERT INTO HinhSanPham (LinkSanPham) VALUES (@LinkSanPham)
SET @IdHinhSanPham = @@IDENTITY
INSERT INTO SanPham (IdDanhMucSanPham,TenSanPham,IdHinhSanPham,MoTaSanPham,GiaSanPham)
VALUES (@IdDanhMucSanPham,@TenSanPham,@IdHinhSanPham,@MoTaSanPham,@GiaSanPham)



GO
/****** Object:  StoredProcedure [dbo].[SanPham_Select]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[SanPham_Select]
AS
SELECT
IdSanPham,TenSanPham,TenDanhMucSanPham,IdHinhSanPham,
SUBSTRING(MoTaSanPham, 1, 150) + '...' AS MoTaSanPham,GiaSanPham
FROM
SanPham INNER JOIN DanhMucSanPham
ON
DanhMucSanPham.IdDanhMucSanPham = SanPham.IdDanhMucSanPham

GO
/****** Object:  StoredProcedure [dbo].[SanPham_SelectSearch]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[SanPham_SelectSearch]
@tieuchuantim nvarchar(255)
AS
SELECT
IdSanPham,
TenSanPham,
TenDanhMucSanPham,
IdHinhSanPham,
SUBSTRING(MoTaSanPham, 1, 150) + '...' AS MoTaSanPham,
GiaSanPham
FROM
SanPham INNER JOIN
DanhMucSanPham
ON
DanhMucSanPham.IdDanhMucSanPham = SanPham.IdDanhMucSanPham
WHERE
TenDanhMucSanPham LIKE '%' + @tieuchuantim + '%' OR
TenSanPham LIKE '%' + @tieuchuantim + '%' OR
MoTaSanPham LIKE '%' + @tieuchuantim + '%'


GO
/****** Object:  StoredProcedure [dbo].[SanPham_Update]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create PROCEDURE [dbo].[SanPham_Update]
@IdDanhMucSanPham int,
@TenSanPham nvarchar(50),
@IdHinhSanPham int,
@LinkSanPham varbinary(MAX),
@MoTaSanPham ntext,
@GiaSanPham int,
@IdSanPham int
AS
UPDATE
HinhSanPham
SET
LinkSanPham = @LinkSanPham
WHERE
IdHinhSanPham = @IdHinhSanPham
UPDATE
SanPham
SET
IdDanhMucSanPham = @IdDanhMucSanPham,
TenSanPham = @TenSanPham,
IdHinhSanPham = @IdHinhSanPham,
MoTaSanPham = @MoTaSanPham,
GiaSanPham = @GiaSanPham
WHERE
IdSanPham = @IdSanPham

GO
/****** Object:  StoredProcedure [dbo].[SanPham10_Select]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[SanPham10_Select]
AS
SELECT Top(10)
IdSanPham,
TenSanPham,
TenDanhMucSanPham,
IdHinhSanPham,
SUBSTRING(MoTaSanPham, 1, 150) + '...' AS MoTaSanPham,
GiaSanPham
FROM
SanPham INNER JOIN
DanhMucSanPham
ON
DanhMucSanPham.IdDanhMucSanPham = SanPham.IdDanhMucSanPham
ORDER BY IdSanPham DESC


GO
/****** Object:  StoredProcedure [dbo].[SanPhamByID_Select]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[SanPhamByID_Select]
@IdSanPham int
AS
SELECT
IdSanPham,TenSanPham,TenDanhMucSanPham,IdHinhSanPham,MoTaSanPham,GiaSanPham
FROM
SanPham INNER JOIN
DanhMucSanPham
ON
DanhMucSanPham.IdDanhMucSanPham = SanPham.IdDanhMucSanPham
WHERE
IdSanPham = @IdSanPham

GO
/****** Object:  StoredProcedure [dbo].[SanPhamByIDDanhMucSanPham]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create PROCEDURE [dbo].[SanPhamByIDDanhMucSanPham]
@IdDanhMucSanPham int
AS
SELECT 
	IdSanPham,
	SanPham.IdDanhMucSanPham,
	TenSanPham,
	TenDanhMucSanPham,
	IdHinhSanPham,
	MoTaSanPham,
	GiaSanPham
FROM 
	DanhMucSanPham INNER JOIN 
	SanPham 
ON 
	DanhMucSanPham.IdDanhMucSanPham = SanPham.IdDanhMucSanPham
WHERE 
	SanPham.IdDanhMucSanPham = @IdDanhMucSanPham


GO
/****** Object:  StoredProcedure [dbo].[SanPhamTheoDanhMuc_Select]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[SanPhamTheoDanhMuc_Select] 
	@IdDanhMucSanPham int
AS
	select IdSanPham,
			IdHinhSanPham,
			substring(MoTaSanPham,1,15)+'...' as MoTaSanPham,
			GiaSanPham,
			TenSanPham	
		from SanPham
		where IdDanhMucSanPham = @IdDanhMucSanPham


GO
/****** Object:  StoredProcedure [dbo].[TinhTrangDonHang_Select]    Script Date: 5/25/2020 2:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


Create PROCEDURE [dbo].[TinhTrangDonHang_Select] 
	
AS
	select *
	from TinhTrangDonHang


GO
